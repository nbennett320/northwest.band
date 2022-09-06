import React from 'react'
import Image from 'next/image'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'
import { ProductData } from '@nw/types'
import styles from './styles.module.scss'

interface Props {
  data: ProductData
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
