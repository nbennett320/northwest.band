import React from 'react'
import Image from 'next/image'
import { Product } from '../../types/product'
import styles from './styles.module.scss'
import Link from 'next/link'

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
        <Link href={`/merch/item/${props.product.handle}`}>
          <a>
            {props.product.title}
          </a>
        </Link>
      </span>
    </div>
  )
}

export default Card
