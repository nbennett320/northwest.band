import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Helmet from './Helmet'
import CheckoutHeader from './CheckoutHeader'
import BraintreeCard from './BraintreeCard'
import Footer from '../../components/footer/Footer'

class CheckoutPage extends Component {
  componentDidMount() {
    const { cart } = this.props
    if(cart.length < 1) {
      this.props.history.push('/cart')
    }
    this.props.setHeaderLink('/cart')
  }

  render() {
    const { 
      cart, 
      device, 
      location 
    } = this.props
    return (
      <div className="view">
        <Helmet />
        <CheckoutHeader 
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />
        <BraintreeCard 
          cart={cart}
          
        />
        <Footer 
          location={location} 
          device={device}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
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
)(CheckoutPage)