import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

interface Props {
  className?: string
  style?: React.CSSProperties
}

const Footer = (props: Props) => {
  return (
    <footer 
      className={`${styles.footer} ${props.className ? props.className : ''}`}
      style={props.style}
    >
      <div className={styles.container}>
        <a
          href="https://www.instagram.com/northwest219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image 
              src="/images/svg/instagram-fill-white.svg" 
              alt="Instagram Logo" 
              width={72} 
              height={24}
            />
          </span>
          instagram
        </a>

        <a
          href="https://twitter.com/northwest219"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image 
              src="/images/svg/twitter-fill-white.svg" 
              alt="Twitter Logo" 
              width={72} 
              height={24}
            />
          </span>
          twitter
        </a>

        <a
          href="https://open.spotify.com/artist/0hscERxMRDZRqZIHjKbExD?si=FGhntveJTxKsk9KsoGFM0A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image 
              src="/images/svg/spotify-fill-white.svg" 
              alt="Spotify Logo" 
              width={72} 
              height={24}
            />
          </span>
          spotify
        </a>

        <a
          href="https://music.apple.com/us/artist/northwest/1409175767"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image 
              src="/images/svg/apple-fill-white.svg" 
              alt="Apple Logo" 
              width={72} 
              height={24}
            />
          </span>
          apple music
        </a>

        <a
          href="https://www.youtube.com/channel/UCsAuRJv-BwMcLELAjNH46dQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image 
              src="/images/svg/youtube-fill-white.svg" 
              alt="Youtube Logo" 
              width={72} 
              height={24}
            />
          </span>
          youtube
        </a>

        <a
          href="https://github.com/nbennett320/northwest.band"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image 
              src="/images/svg/github-fill-white.svg" 
              alt="Github Logo" 
              width={72} 
              height={24}
            />
          </span>
          see the code
        </a>
      </div>
    </footer>
  )
}

export default Footer