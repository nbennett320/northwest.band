import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Album from './music/Album'
import { getAllMusicData, MusicData } from '../lib/music'
import styles from './styles.module.scss'

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
  const albumKeys = Object.keys(props.data)

  return (
    <div className={`${styles.container} ${styles.music}`}>
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
        <h1 className='hidden'>music</h1>

        <div className={styles.grid}>
          {albumKeys.map(key => (
            <div key={key} className={styles.album}>
              <Album 
                album={props.data[key]} 
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Music
