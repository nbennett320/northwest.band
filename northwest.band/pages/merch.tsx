import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { SERVER_URL } from '../env'
import styles from './styles.module.scss'
import Card from './merch/Card'
import { Product } from '../types/product'

interface Props {
  data: Record<string, any>
}

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const res = await fetch(`${SERVER_URL}/products`)
  const data = await res.json()
  console.log("returned data: ", data)
  
  return { 
    props: {
      data
    }
  }
}

const Merch = (props: Props) => {
  console.log(props.data)

  return (
    <div className={`${styles.container} ${styles.merch}`}>
      <Head>
        <title>northwest.band | merch</title>
        <meta 
          name="description" 
          content="official site of northwest the band" 
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
        />
      </Head>

      <main className={`${styles.main} ${styles.flextop}`}>
        <Navbar />
        <h1 className='hidden'>store</h1>

        <div className={`${styles.grid} ${styles.fullwidth}`}>
          <div className={styles.cards}>
            {props.data && props.data.map((el: Product) => (
              <Card 
                key={el.id}
                product={el} 
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Merch
