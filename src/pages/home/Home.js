import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Cloud from './Cloud'
import Footer from '../../components/footer/Footer'
import '../../css/home.css'

class Home extends Component {
  componentDidMount() {
    this.props.setHeaderLink('/')
    const hasShownBlmPanel = localStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }
  }
 
  render() {
    const { device } = this.props
    return (
      <div style={styles.main}>
        {helmet}

        <Cloud link='/music'
          stylesProp={{
            cloud: styles.cloud.music, 
            text: styles.text.music
          }}
          images={{
            cloud: 'img/home/clouds/nwcloud1sprites_364_1500.png',
            text: {
              main: 'img/home/text/music_sprites2_cropped.png',
              hover: 'img/home/text/music_sprites_hover_500_164.png'
            }
          }}
          isMobile={device.isMobile}
        />

        <Cloud link='/merch'
          stylesProp={{
            cloud: styles.cloud.merch, 
            text: styles.text.merch
          }}
          images={{
            cloud: 'img/home/clouds/nwcloud2sprites_364_1500_2.png',
            text: {
              main: 'img/home/text/merchsprites2000x198.png',
              hover: 'img/home/text/merch_hoversprites1500x145.png'
            }
          }}
          isMobile={device.isMobile}
        />

        <Cloud link='/goodies'
          stylesProp={{
            cloud: styles.cloud.goodies, 
            text: styles.text.goodies
          }}
          images={{
            cloud: 'img/home/clouds/nwcloud4sprites_462_2000.png',
            text: {
              main: 'img/home/text/goodiessprites6500x292.png',
              hover: 'img/home/text/goodies_hoversprites1500x308.png'
            }
          }}
          isMobile={device.isMobile}
        />

        <Footer location={this.props.location} />
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: 'auto',
    paddingTop: 'calc(8vh + 40px)',
    paddingBottom: '40px',
    background: '#fec0d3',
  },

  cloud: {
    music: {
      width: '500px',
      height: '364px',
      animation: 'clouds1 0.8s steps(3) infinite',
    },

    merch: {
      width: '500px',
      height: '364px',
      animation: 'clouds2 0.8s steps(3) infinite'
    },

    goodies: {
      width: '500px',
      height: '462px',
      animation: 'clouds3 0.8s steps(4) infinite'
    }
  },

  text: {
    music: {
      main: {
        width: '495px',
        height: '273px',
        top: '20px',
        transform: 'scale(0.5)',
        animation: 'musicText 1.2s steps(11) infinite',
      },

      hover: {
        width: '500px',
        height: '164px',
        top: '80px',
        transform: 'scale(0.6)',
        cursor: 'pointer',
        animation: 'musicTextHover 0.6s steps(3) infinite',
      }
    },

    merch: {
      main: {
        width: '500px',
        height: '198px',
        top: '70px',
        transform: 'scale(0.5)',
        animation: 'merchText 0.8s steps(4) infinite',
      },

      hover: {
        width: '500px',
        height: '145px',
        top: '90px',
        transform: 'scale(0.6)',
        cursor: 'pointer',
        animation: 'merchTextHover 0.5s steps(2) infinite',
      }
    },

    goodies: {
      main: {
        width: '500px',
        height: '292px',
        top: '100px',
        transform: 'scale(0.6)',
        animation: 'goodiesText 1.5s steps(13) infinite',
      },

      hover: {
        width: '500px',
        height: '308px',
        top: '90px',
        left: '15px',
        transform: 'scale(0.6)',
        cursor: 'pointer',
        animation: 'goodiesTextHover 0.5s steps(3) infinite',
      }
    },
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
        chicago, 
        indie
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest is an indie band from Northwest Indiana, started before the summer of 2017.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band" />
    <title>northwest the band | music, merch, and cool stuff</title>
  </Helmet>
)

export default Home