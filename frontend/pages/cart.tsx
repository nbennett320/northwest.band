import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import ImageBlock from '../components/image-block/ImageBlock'
import Footer from '../components/footer/Footer'
import { SERVER_URL } from '../env'
import styles from './styles.module.scss'

interface Props {

}

const Cart = (props: Props) => {
  const [data, setData] = React.useState<Record<string, any>>()

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

        <div className='w-full'>
          <div className='w-full'>
            {/* cart item row */}
            {data?.items.map(item => (
              <div 
                key={item.cartLineId}
                className='w-full row'
              >
                <div className='flex justify-center items-center p-1'>
                  <Image 
                    src={item.image.url}
                    alt={item.image.altTe}
                    height={100}
                    width={100}
                    objectFit='cover'
                  />
                </div>

                <div className='ml-4'>
                  <h4>
                    {item.title.toLowerCase()}
                  </h4>

                  <div>
                    <ul>
                      {item.selectedOptions.map(option => (
                        <li key={option.name.toLowerCase()}>
                          {option.name.toLowerCase()}: {option.value.toLowerCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom */}
          <div className='ml-auto mr-4 w-32'>
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
      </main>

      <Footer />
    </div>
  )
}

export default Cart
