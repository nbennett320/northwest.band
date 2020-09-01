import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Entry from './Entry'
import Footer from '../../components/footer/Footer'
import server from '../../server.config'

export default class Demos extends Component {
  state = {
    goodies: {}
  }

  componentDidMount () {
    this.props.setHeaderLink('/goodies')

    const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }

    this.getGoodiesList()
  }

  getGoodiesList = async () => {
    const goodies = await fetch(`${server}/goodies`,
    {
      method: 'GET'
    }).then(res => res.json())
    this.setState({ goodies })
  }

  listEntries = () => {
    const { goodies } = this.state
    return Object.keys(goodies).map(i => {
      const entry = goodies[i]
      return (
        <div key={i}
          style={styles.entry}
        >
          <Entry 
            name={entry.name}
            img={require(`../../assets/img/music/goodies/${entry.art}`)}
            content={entry.description}
            device={this.props.device}
          />
        </div>
    )}) 
  }

  render() {
    return (
      <div style={styles.main}
        className="view padding-for-header"
      >
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