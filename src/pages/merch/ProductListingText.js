import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class ProductListingText extends Component {
  render() {
    const { title, price, isHovering } = this.props
    return (
      <div style={{
        ...styles.main,
        ...isHovering 
          ? {textDecoration: 'underline'}
          : {textDecoration: 'none'}
      }}>
        <Typography variant="h4">
          {title}
        </Typography>

        <Typography variant="subtitle1">
          ${price}
        </Typography>
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 5%',
  }
}