import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ShippingHeader from './ShippingHeader'
import Form from './Form'
import Footer from '../../components/footer/Footer'

export default class Shipping extends Component {
  componentDidMount() {
    const { cart } = this.props
    if(cart.length < 1) {
      this.props.history.push('/cart')
    }
    this.props.setHeaderLink('/cart')
  }

  render() {
    const { device, location } = this.props
    return (
      <div className="view">
        {helmet}
        <ShippingHeader 
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />

        <Form 
        
        />

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
        shipping
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest shirts, hoodies, physical music and more.
    " />
    <meta name="robots" content="noindex" />
    <meta name="url" content="http://northwest.band/shipping" />
    <title>northwest the band | shipping info</title>
  </Helmet>
)