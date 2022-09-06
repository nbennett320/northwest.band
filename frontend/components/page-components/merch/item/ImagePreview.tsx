import React from 'react'
import Image from 'next/image'
import { ProductImage } from '@nw/types'
import styles from './styles.module.scss'

interface Props {
  images: [ProductImage]
}

const ImagePreview = (props: Props) => {
  const [image, setImage] = React.useState<ProductImage>(props.images[0])

  return (
    <div className={`col`}>
      <div className={styles.imgcontainer}>
        <Image 
          src={image.url}
          alt={image?.altText}
          height={image.height}
          width={image.width}
          layout='intrinsic'
          objectFit='cover'
          priority
        />
      </div>
      <div className={`${styles.imglist} row`}>
        {props.images.map(img => (
          <div 
            key={img.url}
            className={styles.smallimg}
            onMouseEnter={() => { setImage(img) }}
          >
            <Image 
              src={img.url}
              alt={img?.altText}
              height={50}
              width={50}
              layout='intrinsic'
              objectFit='cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImagePreview
