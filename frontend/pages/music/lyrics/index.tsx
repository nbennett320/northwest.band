import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { getAllMusicData, MusicData } from '../../../lib/music'
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

const Lyrics = (props: Props) => {
  console.log(props)

  return (
    <div className={`${styles.container} ${styles.music}`}>
      <Head>
        <title>northwest.band | lyrics</title>
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
        <Navbar href='/music' />
        <h1 className='hidden'>lyrics</h1>

        <div className={styles.grid}>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Lyrics
