import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Album from './Album'
import Footer from '../../components/footer/Footer'
import server from '../../server.config'
import '../../css/music.css'

export default class Music extends Component {
  state = {
    albums: {}
  }

  componentDidMount () {
    this.props.setHeaderLink('/')
    
    const hasShownBlmPanel = localStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }

    this.getAlbums()
  }

  getAlbums = async () => {
    const albums = await fetch(`${server}/albums`,
      {
        method: 'GET'
      }).then(res => res.json())
    this.setState({ albums })
  }

  listEntries = () => {
    const { albums } = this.state
    return Object.keys(albums).map(i => {
      const album = albums[i]
      return (
        <div key={i} 
          style={styles.entry}
        >
          <Album 
            title={`${album["title"]}`}
            date={`${album["date"]}`}
            img={require(`../../assets/img/music/${album["art"]}`)}
            device={this.props.device}
          />
        </div>
    )})}

  render() {
    const { albums } = this.state
    return Object.keys(albums).length > 0 
      ? (
      <div style={styles.main}
        className="view padding-for-header" 
      >
        {helmet}

        <div style={styles.list}>
          {this.listEntries()}
        </div>

        <Footer location={this.props.location} />
      </div>
    ) : <div style={styles.hidden}>
      ( loading )
    </div>
  }
}

const styles = {
  main: {
    paddingBottom: '2vh',
    margin: '0',
    backgroundColor: '#000',
    letterSpacing: '1px',
  },
  entry: {
    width: '100%',
    paddingBottom: '40px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  hidden: {
    display: 'none'
  }
}

const helmet = <Helmet>
  <meta charset="utf-8" />
  <meta name="keywords" 
    content="
      northwest, 
      northwest the band, 
      northwest band,
      music, 
      band, 
      lyrics, 
      219, 
      indie, 
      rock, 
      songs, 
    "
  />
  <link rel="canonical" href="http://northwest.band/music" />
  <meta name="author" content="Noah Bennett" />
  <meta name="description" content="
    A list of Northwest's entire discography and respective lyrics.
  " />
  <meta name="robots" content="index" />
  <meta name="url" content="http://northwest.band/music" />
  <title>northwest the band | music, lyrics, and artwork</title>
</Helmet>