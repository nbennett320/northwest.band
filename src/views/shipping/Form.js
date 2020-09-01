import React, { Component } from 'react'
import {
  TextField
} from '@material-ui/core'

export default class Form extends Component {
  render() {
    return (
      <div style={styles.main}>
        <TextField 
          label="name"
          helperText="what's your name..?"
          required
        />

        <TextField 
          label="phone"
          helperText="what's your (valid, nine-digit phone) number?"
          required
        />

        <TextField 
          label="street address"
          helperText="what's your (valid street) address?"
          required
        />

        <TextField 
          label="zip"
          helperText="what's your (valid 5-digit) zip code?"
          required
        />
      </div>
    )
  }
}

const styles = {
  main: {

  }
}