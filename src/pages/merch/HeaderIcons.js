import React, { Component } from 'react'
import {
  IconButton,
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SortIcon from '@material-ui/icons/Sort'

export default class HeaderIcons extends Component {
  render() {
    return (
      <div style={styles.main}>
        <IconButton>
          <SortIcon />
        </IconButton>

        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '40px',
    right: '40px'
  }
}