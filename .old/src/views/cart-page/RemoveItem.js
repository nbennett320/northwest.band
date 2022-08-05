import React, { Component } from 'react'
import { IconButton } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export default class RemoveItem extends Component {
  handleClick = () => {
    const { item } = this.props
    this.props.removeItemFromCart(item)
  }

  render() {
    return (
      <div style={styles.main}>
        <IconButton onClick={this.handleClick}>
          <HighlightOffIcon />
        </IconButton>
      </div>
    )
  }
}

const styles = {
  main: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto 0',
    marginLeft: 'auto'
  }
}