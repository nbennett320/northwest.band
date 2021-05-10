import React from 'react'

const getThumbnail = src => {
  const filename = src.substring(src.lastIndexOf('/') + 1, src.length)
  const filepath = src.substring(0, src.lastIndexOf('/'))
  const thumb = `${filepath}/thumbnails/${filename}`
  return thumb
}

const AsyncImage = props => {
  const [loaded, setLoaded] = React.useState(0)
  const [src, setSrc] = React.useState('')
  React.useEffect(() => {
    if(loaded > 1) {
    } else if(loaded > 0) {
      const loadSrc = async () => await import(`../${props.src.replaceAll(/\.\.\//g, '')}`).then(res => {
        setSrc(res.default)
        setLoaded(loaded + 1)
      })
      loadSrc()
    } else {
      const thumbnailSrc = getThumbnail(props.src)
      const loadThumbnailSrc = async () => await import(`../${thumbnailSrc.replaceAll(/\.\.\//g, '')}`).then(res => {
        setSrc(res.default)
        setLoaded(loaded + 1)
      })
      loadThumbnailSrc()
    }
  }, [loaded, props.src])
  return loaded ? (
    <img
      src={src}
      alt={props.alt}
      className={props.className}
    />
  ) : (
    <div />
  )
}

export default AsyncImage