import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import ImageBlock from '../../components/image-block/ImageBlock'
import Footer from '../../components/footer/Footer'
import Card from '../../components/page-components/merch/Card'
import { ProductListing } from '@nw/types'
import { SERVER_URL } from '../../env'
import styles from './styles.module.scss'

interface Props {
  data: Array<ProductListing>
}

export const getStaticProps = async () => {
  const res = await fetch(`${SERVER_URL}/products`)
  const data = await res.json()

  return { 
    props: {
      data
    }
  }
}

const Merch: NextPage<Props> = (props: Props) => {
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
        <ImageBlock />

        <div className={`${styles.grid} ${styles.fullwidth} ${styles.merchgrid} mt-0`}>
          <div className={styles.cards}>
            {props.data && props.data.map((el: ProductListing, idx: number) => (
              <Card 
                key={el.id}
                product={el} 
                idx={idx + 1}
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
