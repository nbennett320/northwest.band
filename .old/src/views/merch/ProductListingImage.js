import React, { Component } from 'react'

export default class ProductListingImage extends Component {
  render() {
    const {
      img,
      description
    } = this.props
    return (
      <img src={img}
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