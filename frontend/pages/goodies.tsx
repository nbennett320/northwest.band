import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar/Navbar'
import AnimatedBackground from '../components/animated/AnimatedBackground'
import Footer from '../components/footer/Footer'
import styles from './styles.module.scss'

const Home = () => {
  const images = [
    '/images/goodies/image/demos-image.png',
    '/images/goodies/image/vault-image.png',
  ]
  const text = [
    '/images/goodies/text/demos-text.png',
    '/images/goodies/text/vault-text.png',
  ]
  
  return (
    <div className={`${styles.container} ${styles.goodies}`}>
      <Head>
        <title>northwest.band| goodies</title>
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
        <h1 className='hidden'>northwest.band</h1>

        <div className={styles.grid}>
          <h2 className='hidden'>goodies</h2>
          <AnimatedBackground 
            src={images[0]}
            frames={3}
            duration={`0.8s`}
            className={`${styles.content} ${styles.fullwidth}`}
          >
            <Link href='/goodies/demos'>
              <a>
                <AnimatedBackground 
                  src={text[0]}
                  frames={3}
                  duration={`0.6s`}
                  style={{
                    top: '7.5rem',
                    left: '2.5rem',
                    transform: 'scale(0.5)',
                    position: 'relative',
                  }}
                />
              </a>
            </Link>
          </AnimatedBackground>

          <h2 className='hidden'>merch</h2>
          <AnimatedBackground 
            src={images[1]}
            frames={3}
            duration={`0.8s`}
            className={styles.content}
          >
            <Link href='/demos/vault'>
              <a>
                <AnimatedBackground 
                  src={text[1]}
                  frames={3}
                  duration={`0.7s`}
                  style={{
                    top: '9.5rem',
                    transform: 'scale(0.5)',
                    position: 'relative',
                  }}
                />
              </a>
            </Link>
          </AnimatedBackground>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
