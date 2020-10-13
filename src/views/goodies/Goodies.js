import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimatedImage from './AnimatedImage'
import AnimatedStyles from './AnimatedStyles'
import Footer from '../../components/footer/Footer'
import Helmet from './Helmet'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import '../../css/goodies.css'

class Goodies extends Component {
  componentDidMount () {
    this.props.setHeaderLink('/')
  }

  render() {
    const { device, location } = this.props
    return (
      <div style={styles.main}
        className="view padding-for-header"
      >
        <Helmet />
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

const styles = {
  main: {
    backgroundColor: '#000',
    paddingBottom: '0',
  },
  ...AnimatedStyles
}

const mapDispatchToProps = dispatch => ({
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
)(Goodies)