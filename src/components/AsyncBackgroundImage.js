import React from 'react'

const getThumbnail = src => {
  const filename = src.substring(src.lastIndexOf('/') + 1, src.length)
  const filepath = src.substring(0, src.lastIndexOf('/'))
  const thumb = `${filepath}/thumbnails/${filename}`
  return thumb
}

const AsyncBackgroundImage = props => {
  const [loaded, setLoaded] = React.useState(0)
  const [backgroundImage, setBackgroundImage] = React.useState('')
  React.useEffect(() => {
    if(loaded > 1) {
    } else if(loaded > 0) {
      const loadSrc = async () => await import(`../${props.src.replaceAll(/\.\.\//g, '')}`).then(res => {
        setBackgroundImage(res.default)
        setLoaded(loaded + 1)
      })
      loadSrc()
    } else {
      const thumbnailSrc = getThumbnail(props.src)
      const loadThumbnailSrc = async () => await import(`../${thumbnailSrc.replaceAll(/\.\.\//g, '')}`).then(res => {
        setBackgroundImage(res.default)
        setLoaded(loaded + 1)
      })
      loadThumbnailSrc()
    }
  }, [loaded])
  return loaded ? (
    <div
      className={props.className}
      style={{
        ...styles.background,
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {props.children}
    </div>
  ) : (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

const styles = {
  background: {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}

export default AsyncBackgroundImage