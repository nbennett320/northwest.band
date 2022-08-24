import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CartData, CartDataItem, RemoveCartResponse } from '@nw/types'
import { useGlobalState } from '../../hooks/state'
import Navbar from '../../components/navbar/Navbar'
import ImageBlock from '../../components/image-block/ImageBlock'
import Footer from '../../components/footer/Footer'
import { SERVER_URL } from '../../env'
import styles from './styles.module.scss'
import Button from '../../components/button/Button'

interface Props {

}

const Cart = (props: Props) => {
  const state = useGlobalState()
  const [data, setData] = React.useState<CartData | null>(null)

  React.useEffect(() => {
    const getData = async () => {
      const cartId = state?.cartId
      const res = await fetch(`${SERVER_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': SERVER_URL,
        },
        body: JSON.stringify({
          cartId,
        })
      })

      const updateData: CartData = await res.json()

      setData(updateData)
    }

    if(state?.cartId) getData()
  }, [state?.cartId])

  const removeItem = async (item: CartDataItem, idx: number) => {
    if(state?.setCartTotalQuantity && state.cartTotalQuantity) {
      // spoof cart decrememnt
      if(state?.cartTotalQuantity - 1 > 0) {
        state.setCartTotalQuantity(state?.cartTotalQuantity - 1)
      }
    }

    const cartId = state?.cartId
    const lineId = item.cartLineId

    const res = await fetch(`${SERVER_URL}/cart/remove`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': SERVER_URL,
      },
      body: JSON.stringify({
        cartId,
        lineId,
      })
    })

    if(res.status === 200) {
      const updateData: RemoveCartResponse = await res.json()
      
      if(data) {
        const filtered = { ...data }

        filtered.items.splice(idx, 1)
        filtered.totalQuantity = updateData.totalQuantity
        filtered.cost = updateData.cost
        
        setData(filtered)
      }

      state?.setCartTotalQuantity && state?.setCartTotalQuantity(updateData.totalQuantity)
    }
  }

  return (
    <div className={`${styles.container} ${styles.cart}`}>
      <Head>
        <title>northwest.band | cart</title>
        <meta 
          name="description" 
          content="official site of northwest the band" 
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
        />
      </Head>

      <main className={`${styles.main}  ${styles.flextop}`}>
        <Navbar href={'/merch'} />
        <h1 className='hidden'>cart</h1>
        <ImageBlock />

        {data ? (
          <div className={`${styles.items} w-full`}>
            <div className='w-full'>
              {/* cart item row */}
              {data?.items && data?.items.map((item, idx) => (
                <div 
                  key={item.cartLineId}
                  className={`${styles.item} w-full row border-b pb-4 h-32`}
                >
                  <div className='flex justify-center items-center p-1'>
                    <Image 
                      src={item.image.url}
                      alt={item.image.altText}
                      height={100}
                      width={100}
                      objectFit='cover'
                      priority
                    />
                  </div>

                  <div className='ml-4'>
                    <h3 className='text-lg'>
                      <Link href={`/merch/item/${item.handle}`}>
                        <a className='hover:underline'>
                          {item.title.toLowerCase()}
                        </a>
                      </Link>
                    </h3>

                    <div>
                      <ul>
                        {item.selectedOptions.map(option => (
                          <li 
                            key={option.name.toLowerCase()}
                            className='text-sm text-gray-500'
                          >
                            {option.name.toLowerCase()}: {option.value.toLowerCase()}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='ml-auto mr-4 mt-0 mb-auto items-center col'>
                    <span>
                      ${parseFloat(item.price).toFixed(2)}
                    </span>

                    <span 
                      onClick={() => { removeItem(item, idx) }}
                      className='text-xs ml-auto mb-0 mt-auto text-gray-400 cursor-pointer hover:underline'
                    >
                      remove
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom */}
            {data.totalQuantity > 0 ? (
              <div className='ml-auto mr-4 w-64 pt-4'>
                <div className='col ml-auto w-32'>
                  <span className='text-xs text-gray-500 text-right'>
                    subtotal
                  </span>
                  <span className='text-right'>
                    ${parseFloat(data?.cost?.subtotalAmount.amount).toFixed(2)}
                  </span>
                </div>
                <div className='col ml-auto w-32'>
                  <span className='text-xs text-gray-500 text-right'>
                    total
                  </span>
                  <span className='text-right'>
                    ${parseFloat(data?.cost?.checkoutChargeAmount.amount).toFixed(2)}
                  </span>
                </div>

                <div className='col w-64 mt-8 ml-auto'>
                  <Button
                    element='a'
                    href={data.checkoutUrl}
                    className='text-center ml-auto'
                  >
                    checkout
                  </Button>
                </div>
              </div>
            ) : (
              <div className='w-64'>
                <span className='text-md'>
                  your cart is empty!!
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className={`${styles.items} w-full`}>
            <div className='w-full'>
              {/* page skelleton */}
              {[...Array(state?.cartTotalQuantity).keys()].map(el => (
                <div key={el} className={`${styles.item} w-full row border-b pb-4 h-32`}>
                  {/* spoof image */}
                  <div className='flex justify-center items-center p-1'>
                    <div className={`${styles.imgplaceholder} bg-gray-100 rounded-sm`} />
                  </div>

                  <div className='ml-4'>
                    {/* spoof title */}
                    <h3 className='w-64 h-7 text-lg'>
                      <a className='w-full bg-gray-100 text-gray-100 rounded-sm'>
                        loading loading loading
                      </a>
                    </h3>

                    {/* spoof item details */}
                    <div>
                      <ul>
                        <li className='text-sm bg-gray-100 text-gray-100 rounded-sm'>
                          loading: loading
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* spoof price */}
                  <div className='ml-auto mr-4 mt-0 mb-auto items-center col'>
                    <span className='bg-gray-100 text-gray-100 rounded-sm'>
                      $lo.ad
                    </span>

                    <span className='h-4 mt-0.5 text-xs ml-auto mb-0 bg-gray-100 text-gray-100 rounded-sm'>
                      remove
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom */}
            {/* <div className='ml-auto mr-4 w-32 pt-4'>
              <div className='col w-32'>
                <span className='text-xs text-gray-100 bg-gray-100 text-right'>
                  subtotal
                </span>
                <span className='ml-auto w-16 text-right bg-gray-100 text-gray-100'>
                  $lo.ad
                </span>
              </div>
              <div className='col w-32'>
                <span className='text-xs text-gray-100 bg-gray-100 text-right'>
                  total
                </span>
                <span className='ml-auto w-16 text-right bg-gray-100 text-gray-100'>
                  $lo.ad
                </span>
              </div>
            </div> */}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Cart
