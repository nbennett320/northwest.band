import { makeKey } from '@nw/util'
import albums from '../assets/data/Albums.json'
import songs from '../assets/data/Songs.json'

export interface SongData {
  key: string
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
  title: string
}

export const getAllMusicData = () => {
  let data: Record<string, MusicData> = {}

  albums.forEach(album => {
    const title = album.title
    const songList: SongData[] = songs
      .filter(song => song.album === title)
      .map(song => ({ key: makeKey(song.title), ...song }))
    data[title] = {
      key: makeKey(title),
      songs: songList,
      art: `/images/music/${album.art}`,
      date: Date.parse(album.dateISO),
      title
    }
  })

  return data
}
