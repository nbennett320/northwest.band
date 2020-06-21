import React, { Component } from 'react'
import DropIn from 'braintree-web-drop-in-react'
import server from '../../server.config'
import { Button } from '@material-ui/core'

export default class BraintreeCard extends Component {
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
    console.log(this.props)
    if(!this.state.clientToken) {
      return (
        <div> loading </div>
      )
    } else return (
      <div style={styles.main}>
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
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '20px'
  }
}