import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    const { path, alt } = this.props
    console.log(path)
    return (
      <img src={path}
        alt={`${alt}`}
        style={styles.image}
      />
    )
  }
}

const styles = {
  image: {
    display: 'flex',
    height: '75%',
    width: '75%',
    margin: '0 auto'
  }
}