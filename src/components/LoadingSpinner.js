import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class LoadingSpinner extends Component {
  render() {
    return (
      <div style={styles.main}>
        <Typography variant="body2">
          loading...
        </Typography>
      </div>
    )
  }
}

const styles = {
  main: {
    width: '100%',
    height: '100%'
  }
}