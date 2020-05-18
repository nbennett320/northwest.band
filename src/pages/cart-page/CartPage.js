import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CartHeader from './CartHeader'
import ListArea from './ListArea'
import Footer from '../../components/Footer'

class CartPage extends Component {
  componentDidMount() {
    this.props.setHeaderLink('/merch')
  }

  render() {
    const { cart, device } = this.props
    console.log(this.props)
    return (
      <div style={styles.main}>
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

        <ListArea 
          cart={cart}
          addItemToCart={this.props.addItemToCart}
          removeItemFromCart={this.props.removeItemFromCart}
          device={device}
        />
        
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

const styles = {
  main: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
  }
}

export default CartPage