import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import DropIn from 'braintree-web-drop-in-react'
import CheckoutHeader from './CheckoutHeader'
import Footer from '../../components/Footer'
import { Button } from '@material-ui/core'

const server = "localhost:3001"

export default class CheckoutPage extends Component {
  instance
  state = {
    clientToken: null,
  }

  async componentDidMount() {
    this.props.setHeaderLink('/cart')

    // get token
    const res = await fetch(`${server}/client_token`)
    const clientToken = await res.json()

    this.setState({ clientToken })
  }

  async buy() {
    const { nonce } = await this.instance.requestPaymentMethod()
    await fetch(`${server}/purchase/${nonce}`)
  }

  render() {
    const { cart, device, history } = this.props
    console.log(this.props)
    if(!this.state.clientToken) 
      return (
        <div> loading </div>
      )
    else return (
      <div style={styles.main}>
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

        <DropIn
          options={{
            authorization: this.state.clientToken 
          }}
          onInstance={instance => this.instance = instance}
        />

        <Button onClick={this.buy}
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