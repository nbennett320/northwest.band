import React from 'react'
import { connect } from 'react-redux'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import LyricsHeader from './LyricsHeader'
import LyricsBody from './LyricsBody'
import { LyricsHelmet as Helmet } from './Helmet'
import { makeStyles } from '@material-ui/styles'
import songs from '../../assets/data/Songs.json'
import { AsyncBackgroundImage } from '../../components/'

const getSongFromKey = key => {
  let result
  Object.keys(songs).forEach(i => {
    songs[i].forEach(j => {
      if(key === makeKey(j.title)) {
        result = j
      }
    })
  })
  return result
}

const Lyrics = props => {
  const { match } = props
  const { key } = match.params
  const song = getSongFromKey(key)
  const classes = useStyles({ song, key })
  const backgroundImage = `../../assets/img/lyrics/${song['album'].replace(/\s+/g, '-').toLowerCase()}/${key}.jpg`
  props.setHeaderLink()
  return (
    <AsyncBackgroundImage 
      className={classes.main}
      src={backgroundImage}
    >
      <Helmet 
        song={song}
        songKey={key}
      />
      <div className={classes.content}>
        <LyricsHeader 
          title={song.title}
          album={song.album}
          date={song.date}
        />
        <LyricsBody song={song} />
      </div>
    </AsyncBackgroundImage>
  )
}

const makeKey = title => title.replace(/\s/g,'-').replace(/[.()]/g,'').toLowerCase()

const useStyles = makeStyles(() => ({
    main: {
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '0',
    },
    content: {
      margin: '0 auto',
      marginTop: 'calc(8vh + 40px)',
      maxWidth: '80vw'
    }
}))

const mapStateToProps = state => ({
  device: state.device
})

const mapDispatchToProps = dispatch => ({
  setHeaderLink: () => dispatch({
    type: SET_HEADER_LINK,
    payload: {
      headerLink: '/music'
    }
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lyrics)