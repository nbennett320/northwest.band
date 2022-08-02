import { getAllSongPaths, getSongData } from '../../lib/songs'

export const getStaticPaths = async () => {
  const paths = getAllSongPaths()

  return {
    paths,
    fallback: false,
  }
}

interface SongData {
  id: string
  title: string
  data: string
  album: string
  instrumental: boolean
  lyrics: string[]
}

export const getStaticProps = async ({ params }: { params: SongData }) => {
  const songData = getSongData(params.id)

  return {
    props: {
      songData,
    }
  }
}

interface Props {
  data: SongData
}

const Song = (props: Props) => {
  return (
    <div>
      {props.data.title}
    </div>
  )
}

export default Song
