import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const LyricsBody = props => {
  const classes = useStyles()
  const { lyrics } = props.song
  return (
    <div className={classes.main}>
      <Typography 
        variant="body2" 
        color="secondary"
      >
        {
          lyrics.map((el, i) => (
            <span key={i}> 
              {el.toLowerCase()} 
              <br /> 
            </span>
          ))
        }
      </Typography>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  main: {
    margin: '20px 0'
  }
}))

export default LyricsBody