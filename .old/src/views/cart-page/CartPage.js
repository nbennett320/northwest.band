import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CartHeader from './CartHeader'
import ListArea from './ListArea'
import NoItems from './NoItems'
import Footer from '../../components/footer/Footer'
import Summary from './Summary'

class CartPage extends Component {
  componentDidMount() {
    this.props.setHeaderLink('/merch')

    const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
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
        {helmet}
        
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

const helmet = (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="keywords" 
      content="
        northwest, 
        northwest the band, 
        northwest band,
        music, 
        band, 
        merch, 
        merchandise, 
        clothing, 
        screen print, 
        band tees, 
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest shirts, hoodies, physical music and more.
    " />
    <meta name="robots" content="noindex" />
    <meta name="url" content="http://northwest.band/merch" />
    <title>northwest the band | cart</title>
  </Helmet>
)

export default CartPage