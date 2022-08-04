import React from 'react'
import Image from 'next/image'
import { Product } from '../../types/product'
import styles from './styles.module.scss'

interface Props {
  product: Product
}

const Card = (props: Props) => {
  const image = props.product.images[0]

  return (
    <div className={styles.card}>
      <div className={styles.imgpreview}>
        <Image 
          src={image.url}
          alt={image?.altText}
          layout='intrinsic'
          height={200}
          width={200}
        />
      </div>

      <span className={styles.title}>
        {props.product.title}
      </span>
    </div>
  )
}

export default Card
