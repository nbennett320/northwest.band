import React from 'react'
import Image from 'next/image'
import { MusicData } from '../../lib/music'

interface Props {
  album: MusicData
}

const Album = (props: Props) => {
  const imageSize = 200

  return (
    <div>
      <Image 
        src={props.album.art}
        height={imageSize}
        width={imageSize}
      />
    </div>
  )
}

export default Album
