import Head from 'next/head'
import Layout from './Layout'
import { getAllSongPaths, getSongData, SongData } from '../../../lib/songs'
import styles from './styles.module.scss'

export const getStaticPaths = async () => {
  const paths = getAllSongPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: SongData }) => {
  const songData = getSongData(params.id)

  return {
    props: {
      data: songData,
    }
  }
}

interface Props {
  data: SongData
}

const Song = (props: Props) => {
  return (
    <Layout data={props.data}>
      <Head>
        <title>
          northwest | {props.data.title.toLowerCase()} lyrics
        </title>
        <meta 
          name="description" 
          content="official site of northwest the band" 
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
        />
      </Head>

      <div>
        <h1 className={styles.title}>
          {props.data.title.toLowerCase()}
        </h1>
        <span>
          {props.data.title.toLowerCase()}
        </span>
        
        <ul className={styles.list}>
          {props.data.lyrics.map((line, i) => (
            <li key={`${line}${i}`}>
              {line.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Song
