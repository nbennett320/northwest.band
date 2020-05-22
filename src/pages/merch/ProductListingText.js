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
        <Typography variant="h5" 
          color="textPrimary"
          style={styles.text}
        >
          {title}
        </Typography>

        <div style={styles.price}>
          <Typography variant="subtitle2"
            color="textPrimary"
            style={styles.text}
          >
            ${price}
          </Typography>
        </div>
      </div>
    )
  }
}

const styles = {
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 5%',
  },

  text: {
    textDecoration: 'none',
    padding: '8px 0'
  },

  price: {
    marginTop: 'auto',
    marginBottom: '0',
    marginLeft: 'auto',
  }
}