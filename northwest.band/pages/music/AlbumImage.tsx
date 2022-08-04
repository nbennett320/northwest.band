import React from 'react'
import Image from 'next/image'
import AreaCode from '../../public/images/music/areacode.png'
import SuburbanDogs from '../../public/images/music/subbie dogs text w canvas4.jpg'
import Apathy from '../../public/images/music/apathy2.png'
import SilverLining from '../../public/images/music/silverlining.jpg'
import Self from '../../public/images/music/self.png'
import FriendsTilIDie from '../../public/images/music/friendstilidie.jpg'
import ILikeMike from '../../public/images/music/ilikemike.jpg'
import MissingTexture from '../../public/images/missing_texture.png'

interface Props {
  src: string
  alt: string
  height: number
  width: number
}

const AlbumImage = (props: Props) => {
  const image = () => {
    if(/.*areacode.*/.test(props.src)) return AreaCode
    if(/.*subbie.*/.test(props.src)) return SuburbanDogs
    if(/.*apathy.*/.test(props.src)) return Apathy
    if(/.*silverlining.*/.test(props.src)) return SilverLining
    if(/.*self.*/.test(props.src)) return Self
    if(/.*friendstilidie.*/.test(props.src)) return FriendsTilIDie
    if(/.*ilikemike.*/.test(props.src)) return ILikeMike
    else return MissingTexture
  }

  return (
    <Image
      src={image()}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  )
}

export default AlbumImage
