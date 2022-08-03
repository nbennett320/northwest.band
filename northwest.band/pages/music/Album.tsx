import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MusicData } from '../../lib/music'
import styles from './styles.module.scss'

interface Props {
  album: MusicData
}

const Album = (props: Props) => {
  const imageSize = 200

  return (
    <div className={styles.container}>
      <Image 
        src={props.album.art}
        height={imageSize}
        width={imageSize}
      />
      <h3 className={styles.title}>
        {props.album.songs.length > 1 
          ? props.album.title
          : (
            <Link href={`/lyrics/${props.album.songs[0].key}`}>
              <a className={styles.link}>
                {props.album.title}
              </a>
            </Link>
          )
        }
      </h3>
      {props.album.songs.length > 1 && <ul className={styles.list}>
        {props.album.songs.map(song => (
          <li className={styles.song}>
            {song.instrumental 
              ? song.title 
              : (
                <Link href={`/lyrics/${song.key}`}>
                  <a className={styles.link}>
                    {song.title}
                  </a>
                </Link>
              )
            }
          </li>
        ))}
      </ul>}
      

    </div>
  )
}

export default Album
