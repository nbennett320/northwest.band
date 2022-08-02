import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar/Navbar'
import AnimatedBackground from '../components/animated/AnimatedBackground'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [musicHover, setMusicHover] = React.useState<boolean>(false)
  const [merchHover, setMerchHover] = React.useState<boolean>(false)
  const [goodiesHover, setGoodiesHover] = React.useState<boolean>(false)

  const cloudSrc = [
    '/images/home/clouds/nwcloud1sprites_364_1500.png',
    '/images/home/clouds/nwcloud2sprites_364_1500_2.png',
    '/images/home/clouds/nwcloud4sprites_462_2000.png',
  ]
  const musicSrc = musicHover 
    ? '/images/home/text/music_sprites_hover_500_164.png'
    : '/images/home/text/music_sprites2_cropped.png'
  const merchSrc = merchHover 
    ? '/images/home/text/merch_hoversprites1500x145.png'
    : '/images/home/text/merchsprites2000x198.png'
  const goodiesSrc = goodiesHover 
    ? '/images/home/text/goodies_hoversprites1500x308.png'
    : '/images/home/text/goodiessprites6500x292.png'

  return (
    <div className={styles.container}>
      <Head>
        <title>northwest.band</title>
        <meta 
          name="description" 
          content="official site of northwest the band" 
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
        />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <div className={styles.grid}>
          <AnimatedBackground 
            src={cloudSrc[0]}
            frames={3}
            duration={`0.8s`}
          >
            <Link href='/music'>
              <a
                onMouseOver={() => { setMusicHover(true) }}
                onMouseLeave={() => { setMusicHover(false) }}
              >
                <AnimatedBackground 
                  src={musicSrc}
                  frames={musicHover ? 3 : 11}
                  duration={musicHover ? `0.6s` : `1.2s`}
                  style={{
                    transform: 'scale(0.5)',
                  }}
                />
              </a>
            </Link>
          </AnimatedBackground>

          <AnimatedBackground 
            src={cloudSrc[1]}
            frames={3}
            duration={`0.8s`}
          >
            <Link href='/merch'>
              <a
                onMouseOver={() => { setMerchHover(true) }}
                onMouseLeave={() => { setMerchHover(false) }}
              >
                <AnimatedBackground 
                  src={merchSrc}
                  frames={merchHover ? 2 : 4}
                  duration={merchHover ? `0.5s` : `1.2s`}
                  style={{
                    transform: 'scale(0.5)',
                  }}
                />
              </a>
            </Link>
          </AnimatedBackground>

          <AnimatedBackground 
            src={cloudSrc[2]}
            frames={4}
            duration={`0.8s`}
          >
            <Link href='/goodies'>
              <a
                onMouseOver={() => { setGoodiesHover(true) }}
                onMouseLeave={() => { setGoodiesHover(false) }}
              >
                <AnimatedBackground 
                  src={goodiesSrc}
                  frames={goodiesHover ? 3 : 13}
                  duration={goodiesHover ? `0.6s` : `1.5s`}
                  style={{
                    transform: 'scale(0.5)',
                  }}
                />
              </a>
            </Link>
          </AnimatedBackground>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
