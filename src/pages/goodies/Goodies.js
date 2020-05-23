import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import AnimatedImage from './AnimatedImage'
import Footer from '../../components/Footer'
import '../../css/goodies.css'

export default class Goodies extends Component {
  componentDidMount () {
    this.props.setHeaderLink('/')
  }

  render() {
    return (
      <div style={styles.main}>
        {helmet}

        <div style={styles.container}>
          <AnimatedImage
            link='/demos'
            ids={{
              image: "demo-animation",
              text: "demo-text-animation"
            }}
            stylesProp={{
              image: styles.image.demos, 
              text: styles.text.demos
            }}
            images={{
              image: 'img/goodies/image/demos-image.png',
              text: {
                main: 'img/goodies/text/demos-text.png',
              }
            }}
          />
        </div>

        <div style={styles.container}>
          <AnimatedImage
            link='/vault'
            ids={{
              image: "vault-animation",
              text: "vault-text-animation"
            }}
            stylesProp={{
              image: styles.image.vault, 
              text: styles.text.vault
            }}
            images={{
              image: 'img/goodies/image/vault-image.png',
              text: {
                main: 'img/goodies/text/vault-text.png',
                hover: 'img/goodies/text/vault-text.png'
              }
            }}
          />
        </div>

        <Footer />
      </div>
    )
  }
}

const helmet = (
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
    <title> northwest the band | demos, artwork, and more </title>
  </Helmet>
)

const styles = {
  main: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
    backgroundColor: '#000',
    padding: '0',
    paddingTop: 'calc(5vh + 40px)',
    paddingBottom: '0',
  },

  image: {
    demos: {
      width: '300px',
      height: '295px',
      animation: 'demos 0.8s steps(3) infinite',
    },

    vault: {
      width: '500px',
      height: '295px',
      animation: 'vault 0.8s steps(3) infinite'
    }
  },

  container: {
    marginTop: '20px'
  },

  text: {
    demos: {
      main: {
        width: '500px',
        height: '118px',
        top: '20px',
        transform: 'scale(0.5)',
        animation: 'demosText 1.2s steps(3) infinite',
      },
    },

    vault: {
      main: {
        width: '500px',
        height: '115px',
        top: '70px',
        transform: 'scale(0.5)',
        animation: 'vaultText 0.8s steps(3) infinite',
      },
    }
  }
}