import { makeKey } from '@nw/util'
import songs from '../assets/data/Songs.json'

export interface SongData {
  id: string
  title: string
  data: string
  album: string
  instrumental: boolean
  lyrics: string[]
}

export const getAllSongPaths = () => (
  songs.map(e => ({ params: { id: makeKey(e.title) } }))
)

export const getSongData = (id: string) => {
  const data = songs.find(el => {
    if(id === makeKey(el.title)) {
      return el
    }
  })

  return {
    id,
    ...data,
  }
}
