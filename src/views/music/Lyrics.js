import React from 'react'
import { connect } from 'react-redux'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import LyricsHeader from './LyricsHeader'
import LyricsBody from './LyricsBody'
import Footer from '../../components/footer/Footer'
import { LyricsHelmet as Helmet } from './Helmet'
import server from '../../server.config'

const useFetchLyrics = props => {
  const [song, setSong] = React.useState({})
  const [isLoading, setLoading] = React.useState(true)
  const { key } = props.match.params
  React.useEffect(() => {
    const getSong = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${server}/songs/${key}`, { method: 'GET' })
          .then(res => res.json())
        setSong(res)
      } catch(err) {
        console.error("error fetching song lyrics", err)
        setLoading(false)
      }
    }
    if(Object.keys(song).length === 0) {
      getSong()
    } else {
      setLoading(false)
    }
  }, [song, isLoading, key])
  return [song, isLoading]
}

const Lyrics = props => {
  const [song, isLoading] = useFetchLyrics(props)
  const { match, location, device } = props
  const { key } = match.params
  const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
  if(hasShownBlmPanel === "false") {
    props.setDestination({from: props.match.path})
    props.history.push('/blm')
  }
  props.setHeaderLink()
  return isLoading 
    ? (
    <div style={styles.hidden}>
    ( loading )
    </div>
    ) : (
      <div style={{
          ...styles.main,
          backgroundImage: `url(${server}/assets/img/lyrics/${song["album"].replace(/\s+/g, '-').toLowerCase()}/${key}.jpg)`
        }}
      >
        <Helmet 
          song={song}
          songKey={key}
        />
        <div style={styles.content}>
          <LyricsHeader 
            title={song.title}
            album={song.album}
            date={song.date}
          />
          <LyricsBody song={song} />
        </div>
        <Footer 
          location={location} 
          device={device}
        />
      </div>
    )
  
}

const styles = {
  main: {
    width: '100%',
    height: 'auto',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
    paddingTop: '0',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    margin: '0 auto',
    marginTop: 'calc(8vh + 40px)',
  },
  hidden: {
    display: 'none'
  }
}

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