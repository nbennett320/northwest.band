import React, { Component } from 'react'
import CartImage from './CartImage'
import ItemTitle from './ItemTitle'
import ItemInfo from './ItemInfo'
import RemoveItem from './RemoveItem'
import server from '../../server.config'

export default class CartItem extends Component {
  render() {
    const { item } = this.props
    console.log("cart item", item)
    return (
      <span style={styles.main}>
        <div style={styles.image}>
          <CartImage 
            image={`${server}/assets/img/merch/500/${item.image}${item.selectedColor}.jpg`}
            description={item.attributes.description}
          />
        </div>

        <div style={styles.box}>
          <ItemTitle title={item.title}/>
          <ItemInfo 
            color={item.selectedColor}
            size={item.selectedSize}
            price={item.price}
          />
        </div>

        <RemoveItem 
          item={item}
          removeItemFromCart={this.props.removeItemFromCart}
        />
      </span>
    )
  }
}

const styles = {
  main: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 auto',
    padding: '4px 0',
  },

  image: {
    justifySelf: 'flex-start',
    padding: '10px'
  },

  box: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '40px',
  },
}