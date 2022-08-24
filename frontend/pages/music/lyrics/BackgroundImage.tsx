import React from 'react'
import Image from 'next/image'
import Apathy from '../../../public/images/lyrics/apathy.jpg'
import BailBond from '../../../public/images/lyrics/bail-bond.jpg'
import Buddy from '../../../public/images/lyrics/buddy.jpg'
import ComeAround from '../../../public/images/lyrics/come-around.jpg'
import Crumb from '../../../public/images/lyrics/crumb.jpg'
import CutFromTheSameCloth from '../../../public/images/lyrics/cut-from-the-same-cloth.jpg'
import Dog from '../../../public/images/lyrics/dog.jpg'
import Fader from '../../../public/images/lyrics/fader.jpg'
import Flake from '../../../public/images/lyrics/flake.jpg'
import FriendsTilIDie from '../../../public/images/lyrics/friends-\'til-i-die.jpg'
import GoodForYou from '../../../public/images/lyrics/good-for-you.jpg'
import ILikeMike from '../../../public/images/lyrics/i-like-mike.jpg'
import Lover from '../../../public/images/lyrics/lover.jpg'
import MissMe from '../../../public/images/lyrics/miss-me.jpg'
import MorganAve from '../../../public/images/lyrics/morgan-ave.jpg'
import NewFeel from '../../../public/images/lyrics/new-feel.jpg'
import Nyd from '../../../public/images/lyrics/new-years-day.jpg'
import Poem from '../../../public/images/lyrics/poem.jpg'
import PorterAve from '../../../public/images/lyrics/porter-ave.jpg'
import Quink from '../../../public/images/lyrics/quink.jpg'
import Rendezvous from '../../../public/images/lyrics/rendezvous.jpg'
import Seatbelt from '../../../public/images/lyrics/seatbelt.jpg'
import Self from '../../../public/images/lyrics/self.jpg'
import StayWMe2Nite from '../../../public/images/lyrics/stay-w-me-2nite.jpg'
import TheHill from '../../../public/images/lyrics/the-hill.jpg'
import Uneasy from '../../../public/images/lyrics/uneasy.jpg'
import MissingTexture from '../../../public/images/missing_texture.png'
import styles from './styles.module.scss'

interface Props {
  src: string
  alt: string
}

const BackgroundImage = (props: Props) => {
  const image = () => {
    if(/.*apathy.*/.test(props.src)) return Apathy
    if(/.*bail-bond.*/.test(props.src)) return BailBond
    if(/.*buddy.*/.test(props.src)) return Buddy
    if(/.*come-around.*/.test(props.src)) return ComeAround
    if(/.*crumb.*/.test(props.src)) return Crumb
    if(/.*cut-from-the-same-cloth.*/.test(props.src)) return CutFromTheSameCloth
    if(/.*dog.*/.test(props.src)) return Dog
    if(/.*fader.*/.test(props.src)) return Fader
    if(/.*flake.*/.test(props.src)) return Flake
    if(/.*friends-'til-i-die.*/.test(props.src)) return FriendsTilIDie
    if(/.*good-for-you.*/.test(props.src)) return GoodForYou
    if(/.*i-like-mike.*/.test(props.src)) return ILikeMike
    if(/.*lover.*/.test(props.src)) return Lover
    if(/.*miss-me.*/.test(props.src)) return MissMe
    if(/.*morgan-ave.*/.test(props.src)) return MorganAve
    if(/.*new-feel.*/.test(props.src)) return NewFeel
    if(/.*new-years-day.*/.test(props.src)) return Nyd
    if(/.*poem.*/.test(props.src)) return Poem
    if(/.*porter-ave.*/.test(props.src)) return PorterAve
    if(/.*quink.*/.test(props.src)) return Quink
    if(/.*rendezvous.*/.test(props.src)) return Rendezvous
    if(/.*seatbelt.*/.test(props.src)) return Seatbelt
    if(/.*self.*/.test(props.src)) return Self
    if(/.*the-hill.*/.test(props.src)) return TheHill
    if(/.*stay-w-me-2nite.*/.test(props.src)) return StayWMe2Nite
    if(/.*uneasy.*/.test(props.src)) return Uneasy
    else return MissingTexture
  }

  return (
    <Image
      src={image()}
      alt={props.alt}
      className={styles.bgimage}
      layout='fill'
      placeholder='blur'
      priority
    />
  )
}

export default BackgroundImage
