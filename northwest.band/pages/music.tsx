
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import Album from './music/Album'
import { getAllMusicData, MusicData } from '../lib/music'
import styles from '../styles/Home.module.css'

interface Props {
  data: Record<string, MusicData>
}

export const getStaticProps = (): { props: Props } => {
  const data = getAllMusicData()

  return {
    props: {
      data
    }
  }
}

const Music = (props: Props) => {
  console.log(props)

  const albumKeys = Object.keys(props.data)

  return (
    <div className={styles.container}>
      <Head>
        <title>northwest.band | music</title>
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
        <Navbar href='/' />

        <div className={styles.grid}>
          {albumKeys.map(key => (<Album key={key} album={props.data[key]} />))}
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

export default Music
