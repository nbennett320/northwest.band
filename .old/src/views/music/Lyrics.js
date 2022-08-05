import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import LyricsHeader from './LyricsHeader'
import LyricsBody from './LyricsBody'
import Footer from '../../components/footer/Footer'
import server from '../../server.config'

class Lyrics extends Component {
  state = {
    song: {}
  }

  componentDidMount() {
    this.props.setHeaderLink('/music')

    const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }

    this.getSong()
  }

  // get song data from backend
  getSong = async () => {
    const { match } = this.props
    const { key } = match.params
    const song = await fetch(`${server}/songs/${key}`,
      {
        method: 'GET',
      }).then(res => res.json())
    this.setState({ song })
  }
  
  render() {
    const { song } = this.state
    const { match, location, device } = this.props
    const { key } = match.params
    const helmet = makeHelmet(key, song)
    return Object.keys(song).length > 0 
      ? (
      <div style={{
          ...styles.main,
          backgroundImage: `url(${server}/assets/img/lyrics/${song["album"].replace(/\s+/g, '-').toLowerCase()}/${key}.jpg)`
        }}
      >
        {helmet}

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
    ) : <div style={styles.hidden}>
        ( loading )
      </div>
  }
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

const makeHelmet = (key, song) => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="keywords" 
      content="
        northwest, 
        northwest the band, 
        northwest band,
        music, 
        band, 
        lyrics,
        songs,
        artwork,
        album
      "
    />
    <link rel="canonical" href="http://northwest.band/music" />
    <meta name="author" content="Noah Bennett" />
    <meta name="robots" content="index" />
    <meta name="url" content={`http://northwest.band/songs/${key}`} />
    <title>northwest the band | {Object.keys(song).length > 0 ? song.title.toLowerCase() : ''} lyrics </title>
    <meta name="description" content={`
      Lyrics for "${song.title}" by Northwest.
    `} />
  </Helmet>
)

export default Lyrics