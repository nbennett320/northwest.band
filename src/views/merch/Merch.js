import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Helmet from './Helmet'
import StoreHeader from './StoreHeader'
import Products from './Products'
import Footer from '../../components/footer/Footer'

class Merch extends Component {
  componentDidMount () {
    this.props.setHeaderLink('/')

    const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }
  }

  render() {
    const { device } = this.props
    return (
      <div className="view">
        <Helmet />
        <StoreHeader 
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />
        <Products />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    device: state.device
  }
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
  mapStateToProps,
  mapDispatchToProps
)(Merch)