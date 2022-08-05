import albums from '../assets/data/Albums.json'

const makeKey = (title: string) => title
  .replace(/\s/g,'-')
  .replace(/[.()]/g,'')
  .toLowerCase()

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

