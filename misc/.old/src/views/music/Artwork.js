import React, { Component } from 'react'

export default class Artwork extends Component {
  render() {
    const { img, title } = this.props
    const style = this.props.device.isMobile 
      ? styles.mobile
      : styles.main
    return (
      <img src={img} 
        alt={`album art for northwest's ${title}.`} 
        style={style.cover}
      />
    )
  }
}

const styles = {
  main: {
    cover: {
      maxWidth: '100%',
      minWidth: '100%',
      width: 'auto',
      height: 'auto',
      margin: '10px auto'
    }
  },

  mobile: {
    cover: {
      maxWidth: '100%',
      minWidth: '100%',
      width: 'auto',
      height: 'auto',
      margin: '10px auto'
    }
  }
}