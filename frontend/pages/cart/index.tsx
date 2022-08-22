import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CartData } from '@nw/types'
import Navbar from '../../components/navbar/Navbar'
import ImageBlock from '../../components/image-block/ImageBlock'
import Footer from '../../components/footer/Footer'
import { SERVER_URL } from '../../env'
import styles from './styles.module.scss'

interface Props {

}

const Cart = (props: Props) => {
  const [data, setData] = React.useState<CartData | null>(null)

  React.useEffect(() => {
    const getData = async () => {
      const cartId = localStorage.getItem('cartId')
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

      const data = await res.json()
      console.log("returned data: ", data)

      setData(data)
    }

    getData()
  }, [])

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
          <div className='w-full'>
            <div className='w-full'>
              {/* cart item row */}
              {data?.items.map(item => (
                <div 
                  key={item.cartLineId}
                  className='w-full row border-b pb-4'
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

                  <div className='ml-auto mr-4 mt-auto mb-auto items-center'>
                    <span>
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom */}
            <div className='ml-auto mr-4 w-32 pt-4'>
              <div className='col w-32'>
                <span className='text-xs text-gray-500 text-right'>
                  subtotal
                </span>
                <span className='text-right'>
                  ${data?.cost?.subtotalAmount.amount}
                </span>
              </div>
              <div className='col w-32'>
                <span className='text-xs text-gray-500 text-right'>
                  total
                </span>
                <span className='text-right'>
                  ${data?.cost?.totalAmount.amount}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            loading...
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Cart
