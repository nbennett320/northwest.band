import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import DropIn from 'braintree-web-drop-in-react'
import CheckoutHeader from './CheckoutHeader'
import Footer from '../../components/footer/Footer'
import { Button } from '@material-ui/core'
import server from '../../server.config'

export default class CheckoutPage extends Component {
  instance
  state = {
    clientToken: null,
  }

  async componentDidMount() {
    const { cart } = this.props
    console.log(this.props.history)
    if(cart.length < 1) {
      this.props.history.push('/cart')
    }
    this.props.setHeaderLink('/cart')

    // get token
    const res = await fetch(`${server}/client_token`, {method: 'GET'})
    const clientToken = await res.text()
    this.setState({ clientToken: clientToken })
  }

  async buy() {
    const { amount } = this.props.transaction
    const { nonce } = await this.instance.requestPaymentMethod()
    await fetch(`${server}/purchase/${nonce}/${amount}`, {
      method: 'POST', 
      body: {
        nonce: nonce,
        amount: amount
      }
    })
  }

  render() {
    const { cart, device, history } = this.props
    console.log(this.props)
    if(!this.state.clientToken) {
      return (
        <div> loading </div>
      )
    }
    else return (
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

        <div>
          <DropIn
            options={{
              authorization: this.state.clientToken 
            }}
            onInstance={instance => this.instance = instance}
          />
        </div>

        <Button onClick={this.buy.bind(this)}
          variant="outlined"
        >
          buy
        </Button>
        
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
    <title>northwest the band | checkout</title>
  </Helmet>
)