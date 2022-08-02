import albums from '../assets/data/Albums.json'
import songs from '../assets/data/Songs.json'

const makeKey = (title: string) => title
  .replace(/\s/g,'-')
  .replace(/[.()]/g,'')
  .toLowerCase()

export interface SongData {
  title: string
  date: string
  album: string
  instrumental: boolean
  lyrics?: string[] | undefined
}

export interface MusicData {
  key: string
  songs: SongData[]
  art: string
  date: number
}

export const getAllMusicData = () => {
  let data: Record<string, MusicData> = {}

  albums.forEach(album => {
    const title = album.title
    const songList: SongData[] = songs.filter(song => song.album === title)
    data[title] = {
      key: makeKey(title),
      songs: songList,
      art: `/images/music/${album.art}`,
      date: Date.parse(album.dateISO)
    }
  })

  return data
}
