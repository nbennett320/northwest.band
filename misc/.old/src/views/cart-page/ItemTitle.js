import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class ItemTitle extends Component {
  render() {
    const { title } = this.props
    return (
      <Typography variant="h6" style={styles.main}>
        {title}
      </Typography>
    )
  }
}

const styles = {
  main: {
    maxWidth: '100%',
    margin: '0 auto'
  }
}