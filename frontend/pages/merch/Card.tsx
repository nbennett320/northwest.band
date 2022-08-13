import React from 'react'
import Image from 'next/image'
import { Product } from '../../types/product'
import styles from './styles.module.scss'
import Link from 'next/link'

interface Props {
  product: Product
  idx: number
}

const Card = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState<number>()
  const [hover, setHover] = React.useState<boolean>(false)

  const image = (() => {
    if(props.product.images.length <= 1) return props.product.images[0] 
    else return props.product.images.at(hover ? 1 : 0)
  })()

  React.useEffect(() => {
    if(ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setWidth(rect.width)
    }
  }, [ref])

  return (
    <div 
      className={styles.card}
      style={{
        zIndex: props.idx,
      }}
    >
      <div 
        ref={ref} 
        className={styles.imgpreview}
      >
        {width && <Link href={`/merch/item/${props.product.handle}`}>
          <a 
            className={`${hover ? styles.link : ''}`}
            onMouseOver={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
          >
            {image && <Image
              src={image?.url}
              alt={image?.altText}
              height={width}
              width={width}
              layout='intrinsic'
              objectFit='cover'
            />}
          </a>
        </Link>}
      </div>

      <div className={styles.textcontainer}>
        <span className={styles.title}>
          <Link href={`/merch/item/${props.product.handle}`}>
            <a 
              className={`${hover ? styles.link : ''}`}
              onMouseOver={() => { setHover(true) }}
              onMouseLeave={() => { setHover(false) }}
            >
              {props.product.title.toLocaleLowerCase()}
            </a>
          </Link>
        </span>

        <span className={styles.price}>
          <Link href={`/merch/item/${props.product.handle}`}>
            <a 
              onMouseOver={() => { setHover(true) }}
              onMouseLeave={() => { setHover(false) }}
            >
              ${parseInt(props.product.price as unknown as string)}
            </a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Card
