import React, { Component } from 'react'
import PriceSection from './PriceSection'
import { Button } from '@material-ui/core'

export default class Price extends Component {
  getSubtotal = () => {
    const { cart } = this.props
    let sum = 0
    cart.forEach(item => {
      sum += item.price
    })
    console.log("sum: ", sum)
    return sum
  }

  render() {
    return (
      <div style={styles.main}>
        <PriceSection
          label={"subtotal"}
          value={`$${this.getSubtotal().toFixed(2)}`}
        />

        <PriceSection
          label={"shipping (estimated)"}
          value={`$${this.getSubtotal().toFixed(2)}`}
        />

        <PriceSection
          label={"total"}
          value={`$${this.getSubtotal().toFixed(2)}`}
          bold={true}
        />

        <div style={styles.button}>
          <Button variant="outlined"
            size="large"
            onClick={this.handleClick}
            style={{textTransform: 'lowercase'}}
          >
            checkout
          </Button>
        </div>
        

      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '32px'
  },

  button: {
    width: '100%',
    padding: '10px 20px'
  }
}