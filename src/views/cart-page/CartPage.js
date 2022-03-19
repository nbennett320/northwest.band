import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Helmet from './Helmet'
import CartHeader from './CartHeader'
import ListArea from './ListArea'
import NoItems from './NoItems'
import Footer from '../../components/footer/Footer'
import Summary from './Summary'

class CartPage extends Component {
  componentDidMount() {
    this.props.setHeaderLink('/merch')

    const hasShownPanel = sessionStorage.getItem("hasShownPanel")
    // uses boolean as string
    if(hasShownPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }
  }

  render() {
    const { 
      cart, 
      device, 
      history, 
      location 
    } = this.props
    return (
      <div className="view">
        <Helmet />
        <CartHeader 
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />

        {cart.length > 0 
          ? <ListArea 
            cart={cart}
            addItemToCart={this.props.addItemToCart}
            removeItemFromCart={this.props.removeItemFromCart}
            device={device}
          /> 
          : <NoItems history={history} />
        }
        
        {cart.length > 0 && <Summary
          history={history}
          cart={cart}
        />} 
        
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
)(CartPage)