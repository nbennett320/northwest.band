import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CheckoutHeader from './CheckoutHeader'
import BraintreeCard from './BraintreeCard'
import Footer from '../../components/footer/Footer'

export default class CheckoutPage extends Component {
  componentDidMount() {
    const { cart } = this.props
    if(cart.length < 1) {
      this.props.history.push('/cart')
    }
    this.props.setHeaderLink('/cart')
  }

  render() {
    const { cart, device } = this.props
    
    return (
      <div className="view">
        {helmet}
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
        
        <Footer location={this.props.location} />
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
    <title>northwest the band | checkout</title>
  </Helmet>
)