import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class PriceSection extends Component {
  render() {
    const { label, value, bold } = this.props
    return (
      <div style={styles.section}>
        <Typography variant={bold ? "body1" : "body2"}
          style={{textDecoration: 'underline'}}
        >
          {label}
        </Typography>

        <Typography variant={bold ? "h6" : "body1"}
          style={{marginLeft: 'auto'}}
        > 
          {value}
        </Typography>
      </div>
    )
  }
}

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
  }
}