import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class AddToCart extends Component {
  handleClick = e => {
    const { item, match } = this.props
    this.props.addItemToCart(item, match)
  }

  render() {
    const { device } = this.props
    return (
      <div style={{
        ...device.isMobile
          ? styles.mobile.main
          : styles.main.main
      }}>
          <Button variant="outlined"
            size="large"
            onClick={this.handleClick}
            style={{
              ...device.isMobile
                ? styles.mobile.button
                : styles.main.button
            }}
          >
            add to cart
          </Button>
      </div>
    )
  }
}

const styles = {
  main: {
    main: {
      padding: '0',
      paddingBottom: '40px',
      width: '33.333%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },

    button: {
      textTransform: 'lowercase'
    }
  },

  mobile: {
    main: {
      padding: '0',
      paddingBottom: '40px',
      width: '66.666%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },

    button: {
      textTransform: 'lowercase'
    }
  },
}