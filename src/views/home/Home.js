import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import Cloud from './Cloud'
import AnimationStyles from './AnimationStyles'
import Footer from '../../components/footer/Footer'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import '../../css/home.css'

class Home extends Component {
  componentDidMount() {
    this.props.setHeaderLink('/')
    const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    // if(hasShownBlmPanel === "false") {
    //   this.props.setDestination({from: this.props.match.path})
    //   this.props.history.push('/blm')
    // }
  }
 
  render() {
    const { device, location } = this.props
    return (
      <div style={styles.main}
        className="view padding-for-header"
      >
        {helmet}
        <Cloud link='/music'
          stylesProp={{
            cloud: styles.cloud.music, 
            text: styles.text.music
          }}
          images={{
            cloud: 'assets/img/home/clouds/nwcloud1sprites_364_1500.png',
            text: {
              main: 'assets/img/home/text/music_sprites2_cropped.png',
              hover: 'assets/img/home/text/music_sprites_hover_500_164.png'
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
            cloud: 'assets/img/home/clouds/nwcloud2sprites_364_1500_2.png',
            text: {
              main: 'assets/img/home/text/merchsprites2000x198.png',
              hover: 'assets/img/home/text/merch_hoversprites1500x145.png'
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
            cloud: 'assets/img/home/clouds/nwcloud4sprites_462_2000.png',
            text: {
              main: 'assets/img/home/text/goodiessprites6500x292.png',
              hover: 'assets/img/home/text/goodies_hoversprites1500x308.png'
            }
          }}
          isMobile={device.isMobile}
        />
        <Footer 
          location={location} 
          device={device}
        />
      </div>
    )
  }
}

const styles = {
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '40px',
    background: '#fec0d3',
  }, 
  ...AnimationStyles
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
        rock and roll
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest is a rock and roll band from Northwest Indiana, started before the summer of 2017.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band" />
    <title>northwest the band | music, merch, and cool stuff</title>
  </Helmet>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  setHeaderLink: () => dispatch({
    type: SET_HEADER_LINK,
    payload: {
      headerLink: '/'
    }
  })
})

export default connect(
  null,
  mapDispatchToProps
)(Home)