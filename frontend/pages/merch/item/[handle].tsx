import Head from 'next/head'
import Layout from './Layout'
import { getAllProductPaths, getAllProductData } from '../../../lib/products'
import styles from './styles.module.scss'
import { Product } from '../../../types/product'

export const getStaticPaths = async () => {
  const paths = await getAllProductPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: { handle: string } }) => {
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

const Product = (props: Props) => {
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

      <div>
        <h1 className={styles.title}>
          {props.data.title.toLowerCase()}
        </h1>
        <span>
          {props.data.title.toLowerCase()}
        </span>
      </div>
    </Layout>
  )
}

export default Product
