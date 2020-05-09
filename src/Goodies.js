import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Footer from './components/Footer'

import './css/goodies.css'

class Goodies extends Component {

  componentWillMount () {

    this.props.setHeaderLink('/')
    
  }

  render () {

    return (
      
      <div style={styles.main}>

        <Helmet>

          <meta charset="utf-8" />
          <meta name="keywords" 
            content="
              northwest, 
              northwest the band, 
              northwest band,
              north west, 
              band, 
              nwi, 
              219, 
              the region, 
              northwest indiana, 
              goodies, 
              art
            "
          />
          <link rel="canonical" href="http://northwest.band" />

          <meta name="author" content="Noah Bennett" />

          <meta name="description" content="
            Northwest demo tracks, various works of art, and other goodies.
          " />
          <meta name="robots" content="index" />
          <meta name="url" content="http://northwest.band/goodies" />

          <title>northwest the band | demos, artwork, and more</title>

        </Helmet>

        <div className="goodies-entry">
          
          <div style={styles.items}>

            <h2 className="goodie-head">
              <a href={`${require('./downloads/demos/areacode_Demos.zip')}`} download>
                Area Code Demos
              </a>
            </h2>

            <a className="a-header-goodies" href={`${require('./downloads/demos/areacode_Demos.zip')}`}>
              <img className="album-art-goodies" src={require('./img/music/areacodedemoart1.png')} alt="Area code demo art" />
            </a>

            <div className="goodies-description">

              this zip has a bunch of demo tracks from our first project,
              including stay w me 2nite, lover, fader, and quink (originally
              titled that_one_song, holy_banger, maybe1a2single3for4the5album,
              and BOPEO, respectively). there're also a bunch of other songs
              and cool things on there too if you wanna check them out.

            </div>

            <span className="goodies-span" style={styles.span}>
              <a href={`${require('./downloads/demos/areacode_Demos.zip')}`} download>
                (CLICK HERE TO DOWNLOAD)
              </a>
            </span>

          </div>

        </div>

        <div 
          className="bottom-bar-goodies"
          style={styles.bar}
        />

        <div className="goodies-entry">
          
          <div style={styles.items}>

            <h2 className="goodie-head">
              <a href={`${require('./downloads/live/4431.m4a')}`} download>
                4431 live (july 2019)
              </a>
            </h2>

            <a className="a-header-goodies" href={`${require('./downloads/live/4431.m4a')}`}>
              <img className="album-art-goodies" src={require('./img/music/4431live2.png')} alt="4431 live art" />
            </a>

            <div className="goodies-description">

              this is a pretty decent recording of 4431 that one of us recorded
              on our phone

            </div>

            <span className="goodies-span" style={styles.span}>
              <a href={`${require('./downloads/live/4431.m4a')}`} download>
                (CLICK HERE TO DOWNLOAD)
              </a>
            </span>

          </div>

        </div>

        <Footer />

      </div>

    )

  }

}

const styles = {

  main: {
    width: '100%',
    height: 'auto',
    // minHeight: '100%',
    margin: 'auto',
    paddingTop: 'calc(8vh + 40px)',
    display: 'flex',
    flexDirection: 'column',
    top: '0',
    position: 'absolute',
    backgroundColor: '#000',
    letterSpacing: '1px',
    textTransform: 'lowercase',
  },

  items: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  span: {
    color: '#fff',
    marginTop: '5px',
    marginBottom: '5px',
    fontFamily: '"Work Sans",sans-serif',
    fontWeight: '400',
  },

  center: {
    marginLeft: 'auto'
  },

  bar: {
    width: '80%',
    borderBottomWidth: '1px',
    borderBottomColor: 'hsl(0,0%,0%)',
    borderBottomStyle: 'solid',
    marginTop: '25px',
    marginBottom: '25px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

}

export default Goodies