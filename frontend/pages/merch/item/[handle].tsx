import React from 'react'
import Head from 'next/head'
import { AddCartResponse, CreateCartResponse, ProductData } from '@nw/types'
import { isOverflowing, overflowRatio } from '@nw/util'
import { useGlobalState } from '../../../hooks/state'
import { getAllProductPaths, getAllProductData } from '../../../lib/products'
import Layout from './Layout'
import ImagePreview from './ImagePreview'
import Button from '../../../components/button/Button'
import DropdownSelect, { MenuOption } from '../../../components/menu/DropdownSelect'
import { SERVER_URL } from '../../../env'
import styles from './styles.module.scss'

export const getStaticPaths = async () => {
  const paths = await getAllProductPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (
  { params }: { params: { handle: string } }
) => {
  const productData = await getAllProductData(params.handle)

  return {
    props: {
      data: productData,
    }
  }
}

interface Props {
  data: ProductData
}

const Item = (props: Props) => {
  const state = useGlobalState()
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const [selected, setSelected] = React.useState<Record<string, MenuOption>>()
  const [ratio, setRatio] = React.useState<number>(0)

  const handleSelect = (data: MenuOption) => {
    const val = {
      ...selected,
      [data?.data?.id]: data
    }

    setSelected(val)
  }

  const handleAddToCart = async () => {
    if(state?.setCartTotalQuantity && state.cartTotalQuantity) {
      // spoof cart incrememnt
      state.setCartTotalQuantity(state?.cartTotalQuantity + 1)
    }

    if(!state?.cartId && !state?.cartTotalQuantity) {
      // handle new cart
      const res = await fetch(`${SERVER_URL}/cart/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': SERVER_URL,
        },
        body: JSON.stringify({
          selected,
          handle: props.data.handle,
        }),
      })

      const data: CreateCartResponse = await res.json()
      const { id, totalQuantity } = data
      state?.setCartId && state.setCartId(id as string)
      state?.setCartTotalQuantity && state.setCartTotalQuantity(parseInt(totalQuantity as unknown as string))
    } else if(state?.cartId) {
      // handle add to cart by updating existing cart
      const res = await fetch(`${SERVER_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': SERVER_URL,
        },
        body: JSON.stringify({
          selected,
          handle: props.data.handle,
          cartId: state.cartId,
        }),
      })

      const data: AddCartResponse = await res.json()
      const { totalQuantity } = data
      state?.setCartTotalQuantity && state.setCartTotalQuantity(parseInt(totalQuantity as unknown as string))
    }
  }

  const handleBuyItNow = async () => {
    
  }

  React.useEffect(() => {
    if(titleRef.current) {
      setRatio(Math.max(...overflowRatio(titleRef.current)))
    }
  }, [titleRef])

  const isValid = () => {
    if(!selected) return false
    if(props.data.options?.length !== Object.keys(selected).length) return false

    return true
  }

  return (
    <Layout data={props.data}>
      <Head>
        <title>
          northwest | {props.data.title.toLowerCase()}
        </title>
        <meta 
          name="description" 
          content="official site of northwest the band" 
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.block}>
            <ImagePreview
              images={props.data.images}
            />
          </div>

          <div className={`pt-2 col ${styles.block}`}>
            <div className={`${styles.info} h-64 pl-4 pr-4`}>
              <h1 
                className={`${styles.title} h-36 max-h-34 flex items-center`}
                ref={titleRef}
                style={{
                  fontSize: 
                    (ratio > 1)
                      ? `calc(3.75rem * ${Math.pow(ratio, 1) - Math.pow(ratio, -1)})`
                      : undefined,
                  opacity: titleRef.current ? 1 : 0,
                }}
              >
                {props.data.title.toLowerCase()}
              </h1>

              <span 
                className={styles.price}
                style={{
                  opacity: titleRef.current ? 1 : 0,
                }}
              >
                ${parseInt(props.data.price as unknown as string)}
              </span>
            </div>

            <div className='w-full col items-center mt-2 mb-2'>
              {props.data.options?.map(option => (
                <div key={option.id}>
                  <DropdownSelect 
                    label={option.name}
                    value={selected?.[option.id]?.label}
                    options={option.values.map(value => ({
                      value, 
                      label: value,
                      data: {
                        id: option.id,
                        optionName: option.name,
                      }
                    }))}
                    onChange={(_, data) => { handleSelect(data) }}
                  />
                </div>
              ))}
            </div>

            <div className='w-full col items-center mt-2'>
              <div className='flex justify-center mb-2'>
                <Button 
                  onClick={handleAddToCart}
                  disabled={!isValid()}
                >
                  add to cart
                </Button>
              </div>

              {/* <div className='flex justify-center mt-2'>
                <Button 
                  onClick={handleBuyItNow}
                  disabled={!isValid()}
                >
                  buy it now
                </Button>
              </div> */}
            </div>
          </div>
        </div>

        <div className={`${styles.description} ml-auto mr-auto mt-8 mb-8 border-t-[1px] border-t-gray-200 border-solid`}>
          <p className='ml-2 mr-2 mt-4 mb-4'>
            {props.data.description.toLowerCase()}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Item
