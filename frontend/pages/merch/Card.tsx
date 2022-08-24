import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductListing } from '@nw/types'
import styles from './styles.module.scss'

interface Props {
  product: ProductListing
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
        className={`${styles.imgpreview} p-4`}
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

      <div className={`col h-24`}>
        <div className='flex h-16'>
          <span className={`${styles.title} mb-auto ml-4 mr-4 text-lg`}>
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
        </div>

        <div className='flex h-8'>
          <span className={`${styles.price} mb-2 ml-auto mr-4`}>
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
    </div>
  )
}

export default Card
