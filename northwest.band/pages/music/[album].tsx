import { getAllSongPaths, getSongData } from '../../lib/songs'

export const getStaticPaths = async () => {
  const paths = getAllSongPaths()

  return {
    paths,
    fallback: false,
  }
}

interface AlbumData {
  id: string
  title: string
  data: string
  album: string
  instrumental: boolean
  lyrics: string[]
}

export const getStaticProps = async ({ params }: { params: AlbumData }) => {
  const albumData = getSongData(params.id)

  return {
    props: {
      data: albumData,
    }
  }
}

interface Props {
  data: AlbumData
}

const Song = (props: Props) => {
  return (
    <div>
      {props.data.title}
    </div>
  )
}

export default Song
