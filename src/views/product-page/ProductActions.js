import React from 'react'
import ProductTitle from './ProductTitle'
import ProductSelectors from './ProductSelectors'
import NativeSelectors from './Selectors.Native'
import AddToCart from './AddToCart'

const ProductActions = props => {
  return (
    <div style={styles.main}>
      <ProductTitle 
        item={props.item} 
        device={props.device} 
      />
      {props.device.isMobile
        ? <NativeSelectors 
          item={props.item}
          model={props.model}
          setColor={props.setColor}
          setSize={props.setSize}
          setUrl={props.setUrl}
        />
        : <ProductSelectors 
          item={props.item}
          model={props.model}
          setColor={props.setColor}
          setSize={props.setSize}
          setUrl={props.setUrl}
        />
      }
      <AddToCart 
        item={props.item}
        match={props.match}
        device={props.device}
        addItemToCart={props.addItemToCart}
      />
    </div>
  )
}

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

export default ProductActions