import React from 'react'
import Description from './Description'

const ProductDetails = props => {
  return (
    <div style={styles.main}>
      <Description item={props.item} />
    </div>
  )
}

const styles = {
  main: {
    padding: '20px 10px'
  }
}

export default ProductDetails