import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class Artwork extends Component {
  render() {
    const { content } = this.props
    const style = this.props.device.isMobile 
      ? styles.mobile
      : styles.main
    return (
      <div style={style.main}>
        <Typography 
          variant="body2"
          color="secondary"
        >
          {content}
        </Typography>
      </div>
    )
  }
}

const styles = {
  main: {
    main: {
      width: '90%'
    }
  },

  mobile: {
    main: {
      width: '90%'
    }
  }
}