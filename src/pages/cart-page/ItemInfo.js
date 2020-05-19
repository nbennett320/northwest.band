import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class ItemInfo extends Component {
  render() {
    const { color, size, price } = this.props
    return (
      <ul style={styles.main}>
        <li>
          <Typography variant="body1">
            size: {size}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            color: {color}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            price: ${price}
          </Typography>
        </li>
      </ul>
    )
  }
}

const styles = {
  main: {
    width: '100%',
  }
}