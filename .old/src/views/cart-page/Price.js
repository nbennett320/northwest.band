import React, { Component } from 'react'
import PriceSection from './PriceSection'
import { Button } from '@material-ui/core'
import GetSubtotal from '../../scripts/GetSubtotal'
import GetShippingCost from '../../scripts/GetShippingCost'
import GetTotal from '../../scripts/GetTotal'

export default class Price extends Component {
  handleClick = () => {
    this.props.history.push('/shipping')
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
    return (
      <div style={styles.main}>
        <PriceSection
          label={"subtotal"}
          value={`$${this.getPrice().subtotal}`}
        />

        {this.getPrice().shipping && <PriceSection
          label={"shipping (estimated)"}
          value={`$${this.getPrice().shipping}`}
        />}

        <PriceSection
          label={"total"}
          value={`$${this.getPrice().total}`}
          bold={true}
        />

        <div style={styles.button}>
          <Button variant="outlined"
            size="large"
            onClick={this.handleClick}
            style={{textTransform: 'lowercase'}}
          >
            continue to shipping
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
    padding: '10px 0px'
  }
}