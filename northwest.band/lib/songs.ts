import songs from '../assets/data/Songs.json'

const makeKey = (title: string) => title
  .replace(/\s/g,'-')
  .replace(/[.()]/g,'')
  .toLowerCase()

export const getAllSongPaths = () => ({
  params: {
    id: songs.map(e => makeKey(e.title))
  }
})

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
