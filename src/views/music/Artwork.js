import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Artwork = props => {
  const { img, title } = props
  const classes = useStyles()
  return (
    <img 
      src={img} 
      alt={`album art for northwest's ${title}.`} 
      className={classes.cover}
    />
  )
}

const useStyles = makeStyles(() => ({
  cover: {
    maxWidth: '100%',
    minWidth: '100%',
    width: 'auto',
    height: 'auto',
    margin: '10px auto'
  }
}))

export default Artwork