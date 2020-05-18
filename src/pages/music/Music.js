import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Album from './Album'
import Footer from '../../components/Footer'
import albums from '../../data/Albums.json'

import '../../css/music.css'

class Music extends Component {
  componentDidMount () {
    this.props.setHeaderLink('/')
  }


  listEntries = () => (
    Object.keys(albums).map(i => {
      const album = albums[i]
      return (
        <div key={i} 
          style={styles.entry}
        >
          <Album 
            title={`${album["title"]}`}
            date={`${album["date"]}`}
            img={require(`../../img/music/${album["art"]}`)}
            device={this.props.device}
          />
        </div>
    )}) 
  )

  render() {
    return (
      <div style={styles.main}>
        {helmet}

        <div style={styles.list}>
          {this.listEntries()}
        </div>

        <Footer location={this.props.location} />
      </div>
    )
  }
}

const styles = {
  main: {
    width: '100%',
    height: 'auto',
    paddingTop: 'calc(8vh + 40px)',
    paddingBottom: '2vh',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    top: '0',
    position: 'absolute',
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

export default Music