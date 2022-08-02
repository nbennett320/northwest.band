import { getAllAlbumPaths, getAlbumData } from '../../lib/albums'

export const getStaticPaths = async () => {
  const paths = getAllAlbumPaths()

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
  const albumData = getAlbumData(params.id)

  return {
    props: {
      data: albumData,
    }
  }
}

interface Props {
  data: AlbumData
}

const Album = (props: Props) => {
  return (
    <div>
      {props.data.title}
    </div>
  )
}

export default Album
