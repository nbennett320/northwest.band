import React, { Component } from 'react'
import CartImage from './CartImage'
import ItemTitle from './ItemTitle'
import ItemInfo from './ItemInfo'

export default class CartItem extends Component {
  render() {
    const { item } = this.props
    console.log(item)
    return (
      <span style={styles.main}>
        <div style={styles.box}>
          <CartImage 
            image={require(`../../img/merch/500/${item.image}${item.selectedColor}.jpg`)}
            description={item.attributes.description}
          />
          <ItemTitle title={item.title}/>
        </div>

        <ItemInfo 
          color={item.selectedColor}
          size={item.selectedSize}
        />
      </span>
    )
  }
}

const styles = {
  main: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 auto',
    padding: '20px 0',
  },

  box: {
    width: '33.333%',
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'flex-start',
    justifyContent: 'center',
  }
}