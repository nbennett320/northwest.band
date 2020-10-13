import React, { Component } from 'react'
import DropIn from 'braintree-web-drop-in-react'
import server from '../../server.config'
// import { Button } from '@material-ui/core'
import LoadingSpinner from '../../components/loaders/LoadingSpinner'
import GetSubtotal from '../../scripts/GetSubtotal'
import GetShippingCost from '../../scripts/GetShippingCost'
import GetTotal from '../../scripts/GetTotal'

export default class BraintreeCard extends Component {
  instance
  state = {
    clientToken: null,
  }

  async componentDidMount() {
    // get token
    const res = await fetch(`${server}/client_token`, {method: 'GET'})
    const clientToken = await res.text()
    this.setState({ clientToken: clientToken })
  }

  async buy() {
    const { amount } = this.props.transaction
    const { nonce } = await this.instance.requestPaymentMethod()
    await fetch(`${server}/purchase/${nonce}/${amount}`, {
      method: 'POST'
    })
  }

  getPrice = () => {
    const { cart } = this.props 
    return {
      subtotal: GetSubtotal(cart),
      shipping: GetShippingCost(cart),
      total: GetTotal(cart)
    }
  }

  render() {
    const { clientToken } = this.state
    console.log(this.props)
    if(!clientToken) {
      return (
        <div style={styles.loader}>
          <LoadingSpinner />
        </div>
      )
    } else return (
      <div style={styles.main}>
        <DropIn
          options={{
            authorization: clientToken,
            paypal: {
              flow: 'checkout',
              amount: this.getPrice().total,
              currency: 'USD',
            },
            venmo: true,
            threeDSecure: true
          }}
          onInstance={instance => this.instance = instance}
        />

        {/* <Button onClick={this.buy}
          variant="outlined"
          style={styles.button}
        >
          buy
        </Button> */}
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '20px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  button: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: '0'
  },

  loader: {
    margin: 'auto auto'
  }
}