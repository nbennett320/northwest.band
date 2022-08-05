import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import AnimatedImage from './AnimatedImage'
import AnimatedStyles from './AnimatedStyles'
import Footer from '../../components/footer/Footer'
import '../../css/goodies.css'

export default class Goodies extends Component {
  componentDidMount () {
    this.props.setHeaderLink('/')
  }

  render() {
    const { device, location } = this.props
    return (
      <div style={styles.main}
        className="view padding-for-header"
      >
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
              image: 'image/demos-image.png',
              text: {
                main: 'text/demos-text.png',
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
              image: 'image/vault-image.png',
              text: {
                main: 'text/vault-text.png',
                hover: 'text/vault-text.png'
              }
            }}
          />
        </div>

        <Footer 
          location={location} 
          device={device}
        />
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
    backgroundColor: '#000',
    paddingBottom: '0',
  },
  ...AnimatedStyles
}