import React, { Component } from 'react'

export default class ProductImage extends Component {
  render() {
    const {
      img,
      description,
      handleMouseEnter,
      handleMouseLeave
    } = this.props
    return (
      <img src={require(img)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt={description}
        style={styles.image}
      />
    )
  }
}

const styles = {
  image: {
    width: '90%',
    margin: '5%',
    borderRadius: '0',
  },
}