import React, { Component } from 'react'
import Description from './Description'

export default class ProductDetails extends Component {
  render() {
    const { item } = this.props
    console.log(this.props)
    return (
      <div style={styles.main}>
        {/* <Typography variant="subtitle1">
          description
        </Typography> */}
        <Description item={item} />
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '20px 10px'
  }
}