import { makeKey } from '@nw/util'
import albums from '../assets/data/Albums.json'

export const getAllAlbumPaths = () => ({
  params: {
    id: albums.map(e => makeKey(e.title))
  }
})

export const getAlbumData = (id: string) => {
  const data = albums.find(el => {
    if(id === makeKey(el.title)) {
      return el
    }
  })

  return {
    id,
    ...data,
  }
}

