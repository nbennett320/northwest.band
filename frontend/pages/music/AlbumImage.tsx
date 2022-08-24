import React from 'react'
import Image from 'next/image'
import Apathy from '../../public/images/music/apathy2.png'
import AreaCode from '../../public/images/music/areacode.png'
import CutFromTheSameCloth from '../../public/images/music/cutfromthesamecloth.jpg'
import FriendsTilIDie from '../../public/images/music/friendstilidie.png'
import ILikeMike from '../../public/images/music/ilikemike.jpg'
import Nyd from '../../public/images/music/nyd.png'
import Self from '../../public/images/music/self.png'
import SilverLining from '../../public/images/music/silverlining.jpg'
import SuburbanDogs from '../../public/images/music/subbie dogs text w canvas4.jpg'
import TheHill from '../../public/images/music/thehill.jpg'
import MissingTexture from '../../public/images/missing_texture.png'

interface Props {
  src: string
  alt: string
  height: number
  width: number
}

const AlbumImage = (props: Props) => {
  const image = () => {
    if(/.*apathy.*/.test(props.src)) return Apathy
    if(/.*areacode.*/.test(props.src)) return AreaCode
    if(/.*cutfromthesamecloth.*/.test(props.src)) return CutFromTheSameCloth
    if(/.*friendstilidie.*/.test(props.src)) return FriendsTilIDie
    if(/.*ilikemike.*/.test(props.src)) return ILikeMike
    if(/.*nyd.*/.test(props.src)) return Nyd
    if(/.*self.*/.test(props.src)) return Self
    if(/.*silverlining.*/.test(props.src)) return SilverLining
    if(/.*subbie.*/.test(props.src)) return SuburbanDogs
    if(/.*thehill.*/.test(props.src)) return TheHill
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
