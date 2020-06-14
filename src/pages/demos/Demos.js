import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Entry from './Entry'
import Footer from '../../components/footer/Footer'
import goodies from '../../data/Goodies.json'

export default class Demos extends Component {
  componentDidMount () {
    this.props.setHeaderLink('/goodies')
  }

  listEntries = () => (
    Object.keys(goodies).map(i => {
      const entry = goodies[i]
      console.log("entry", entry)
      return (
        <div key={i}
          style={styles.entry}
        >
          <Entry 
            name={entry.name}
            img={require(`../../img/music/goodies/${entry.art}`)}
            content={entry.description}
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
    flexDirection: 'column'
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
      indie, 
      rock, 
      songs,
      demos,
      live,
      songs,
      covers
    "
  />
  <link rel="canonical" href="http://northwest.band/music" />
  <meta name="author" content="Noah Bennett" />
  <meta name="description" content="
    Demos, live versions, and covers by Northwest.
  " />
  <meta name="robots" content="index" />
  <meta name="url" content="http://northwest.band/music" />
  <title> northwest the band | demos, live versions, and covers </title>
</Helmet>