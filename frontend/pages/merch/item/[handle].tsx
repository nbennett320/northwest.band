import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import { getAllProductPaths, getAllProductData } from '../../../lib/products'
import { Product, ProductOption } from '../../../types/product'
import ImagePreview from './ImagePreview'
import styles from './styles.module.scss'
import DropdownSelect, { MenuOption } from '../../../components/menu/DropdownSelect'

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
  const [selected, setSelected] = React.useState<Record<string, MenuOption>>()

  const handleSelect = (data: MenuOption) => {
    const val = {
      ...selected,
      [data?.data?.id]: data
    }

    setSelected(val)
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
        <div className='row'>
          <div className='w-1/2'>
            <ImagePreview
              images={props.data.images}
            />
          </div>

          <div className='pt-4 col w-1/2'>
            <h1 className={styles.title}>
              {props.data.title.toLowerCase()}
            </h1>

            <span className={styles.price}>
              ${parseInt(props.data.price as unknown as string)}
            </span>

            {props.data.options?.map(option => (
              <div key={option.id}>
                <DropdownSelect 
                  label={option.name}
                  value={selected?.[option.id]?.label}
                  options={option.values.map(value => ({
                    value, 
                    label: value,
                    data: {
                      id: option.id
                    }
                  }))}
                  onChange={(_, data) => { handleSelect(data) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Item
