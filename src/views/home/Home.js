import React from 'react'
import { connect } from 'react-redux'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Cloud from './Cloud'
import AnimationStyles from './AnimationStyles'
import Helmet from './Helmet'
import '../../css/home.css'

const Home = props => {
  const { device } = props
  const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
  props.setHeaderLink()

  // uses boolean as string
  if(hasShownBlmPanel === "false") {
    props.setDestination({from: props.match.path})
    props.history.push('/blm')
  }
  return (
    <div style={styles.main}
      className="view padding-for-header"
    >
      <Helmet />
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
    </div>
  )
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

const mapStateToProps = state => ({
  device: state.device
})

const mapDispatchToProps = dispatch => ({
  setHeaderLink: () => dispatch({
    type: SET_HEADER_LINK,
    payload: {
      headerLink: '/'
    }
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)