import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class Title extends Component {
  render() {
    const { item, device } = this.props
    return (
      <div style={{
        ...device.isMobile 
          ? styles.mobile.title
          : styles.main.title
      }}>
        <Typography variant="h2">
          {item.title}
        </Typography>
        
        <Typography variant="h5">
          ${item.price}
        </Typography>
      </div>
    )
  }
}

const styles = {
  main: {
    title: {
      padding: '40px 0',
      margin: '0 auto'
    }
  },
  
  mobile: {
    title: {
      padding: '40px 50px',
      margin: '0 auto'
    }
  }
}