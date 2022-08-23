import React, { Component } from 'react'
import CartItem from './CartItem'
import CartItemNative from './CartItem.Native'
import { Divider } from '@material-ui/core'

export default class ListArea extends Component {
  render() {
    const { cart, device } = this.props
    return (
      <div style={styles.main}>
        {Object.values(cart).map((item, i) => (
          <div key={i} style={styles.item}>
            {device.isMobile 
              ? <CartItemNative
                item={item} 
                addItemToCart={this.props.addItemToCart}
                removeItemFromCart={this.props.removeItemFromCart}
                device={device}
              />
              : <CartItem 
                item={item} 
                addItemToCart={this.props.addItemToCart}
                removeItemFromCart={this.props.removeItemFromCart}
                device={device}
              />}
            <Divider />
          </div>
        ))}
      </div>
    )
  }
}

const styles = {
  main: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },

  item: {
    width: '100%',
    margin: '0 auto'
  }
}