import React from 'react'
import Image from 'next/image'
import DayImage from '../../public/images/store/store_header_imgs/2.jpg'
import EveningImage from '../../public/images/store/store_header_imgs/10.jpg'
import NightImage from '../../public/images/store/store_header_imgs/4.jpg'
import styles from './styles.module.scss'

enum TimeOfDay {
  Day = 'day',
  Evening = 'evening',
  Night = 'night'
}

const getTimeOfDay = (): TimeOfDay => {
  const now = new Date(Date.now())
  const hour = now.getHours()

  if(hour >= 20) return TimeOfDay.Night
  else if(hour >= 17) return TimeOfDay.Evening
  else return TimeOfDay.Day
}

const ImageBlock = () => {
  const tod = getTimeOfDay()
  const src = () => {
    if(tod === TimeOfDay.Day) return DayImage
    else if(tod === TimeOfDay.Evening) return EveningImage
    else return NightImage
  }

  return (
    <div className={styles.container}>
      <Image 
        src={src()}
        alt={`${tod} store header image`}
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}

export default ImageBlock
