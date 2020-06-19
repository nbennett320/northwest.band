import React, { Component } from 'react'
import CartImage from './CartImage'
import ItemTitle from './ItemTitle'
import ItemInfo from './ItemInfo'
import RemoveItem from './RemoveItem'

export default class CartItem extends Component {
  render() {
    const { item } = this.props
    console.log(item)
    return (
      <span style={styles.main}>
        <div style={styles.image}>
          <CartImage 
            image={import(`../../assets/img/merch/500/${item.image}${item.selectedColor}.jpg`)}
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
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 auto',
    padding: '20px 0',
  },

  image: {
    justifySelf: 'flex-start',
    padding: '10px'
  },

  box: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // justifySelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: '20px'
  }
}