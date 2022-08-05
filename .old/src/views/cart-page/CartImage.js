import React, { Component } from 'react'

export default class CartImage extends Component {
  render() {
    const { 
      image,
      description,
    } = this.props
    console.log(image)
    return (
      <img src={image}
        style={styles.image}
        alt={description}
      />
    )
  }
}

const styles = {
  image: {
    height: '100px',
    width: '100px',
    margin: '0 auto'
  }
}