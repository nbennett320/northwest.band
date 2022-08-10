import React from 'react'
import Image from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { Product } from '../../../types/product'
import styles from './styles.module.scss'

interface Props {
  data: Product
}

const Layout = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={`${styles.container}`}>
      <main className={styles.main}>
        <Navbar href='/merch' />

        <div className={styles.grid}>
          {props.children}
        </div>
      </main>

      <Footer style={{ position: 'relative' }} />
    </div>
  )
}

export default Layout
