import React from 'react'
import Head from 'next/head'
import { CreateCartResponse, Product } from '@nw/types'
import { useGlobalState } from '../../../context/state'
import { getAllProductPaths, getAllProductData } from '../../../lib/products'
import Layout from './Layout'
import ImagePreview from './ImagePreview'
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
  data: Product
}

const Item = (props: Props) => {
  const state = useGlobalState()
  const [selected, setSelected] = React.useState<Record<string, MenuOption>>()

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
      localStorage.setItem('cartId', id)
      localStorage.setItem('cartTotalQuantity', totalQuantity as unknown as string)
      state?.setCartId && state.setCartId(id as string)
      state?.setCartTotalQuantity && state.setCartTotalQuantity(parseInt(totalQuantity as unknown as string))
    }

    // state?.setCartId(state, localStorage.getItem('cartId'))
    // state?.setCartTotalQuantity(state, parseInt(localStorage.getItem('cartTotalQuantity') as unknown as string))
  }

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

          <div className={`pt-4 col ${styles.block}`}>
            <h1 className={styles.title}>
              {props.data.title.toLowerCase()}
            </h1>

            <span className={styles.price}>
              ${parseInt(props.data.price as unknown as string)}
            </span>

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
              <div className='flex space-x-2 justify-center'>
                <button
                  onClick={handleAddToCart}
                  disabled={!isValid()}
                  type='button'
                  className={`inline-block w-48 px-6 py-2.5 border border-gray-300 shadow-sm text-gray-700 text-xs font-bold leading-tight rounded hover:bg-gray-50 hover:shadow-lg focus:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:shadow-md active:bg-gray-200 active:shadow-md transition duration-150 ease-in-out ${!isValid() ? 'pointer-events-none opacity-60 cursor-not-allowed shadow-none' : ''}`}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Item
