import React, { Component } from 'react'
import {
  TextField,
} from '@material-ui/core'
import StateSelect from './StateSelect'
import StateSelectNative from './StateSelect.Native'

export default class Form extends Component {
  handleChangeState = e => {
    console.log(e.target.value)
  }

  render() {
    const { device } = this.props
    return (
      <div style={{
        ...device.isMobile
          ? styles.mobile.main
          : styles.main.main
      }}>
        <TextField 
          label="name"
          helperText={nameText[Math.floor(Math.random() * nameText.length)]}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="phone"
          helperText={phoneText[Math.floor(Math.random() * phoneText.length)]}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="street address"
          helperText={streetText[Math.floor(Math.random() * streetText.length)]}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="zip"
          helperText={zipText[Math.floor(Math.random() * zipText.length)]}
          required
          style={styles.textEntry}
        />

        {device.isMobile
          ? <StateSelectNative handleChangeState={this.handleChangeState} />
          : <StateSelect handleChangeState={this.handleChangeState} />
        }
      </div>
    )
  }
}

const styles = {
  main: {
    main: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
    }
  },
  mobile: {
    main: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      margin: '10px auto',
    }
  },
  textEntry: {
    marginBottom: '10px'
  }
}

const nameText = [
  "what's your name..?",
  "enter your name",
]

const phoneText = [
  "what's your (valid, nine-digit phone) number?",
  "what's your phone number?",
  "enter your phone number"
]

const streetText = [
  "what's your (valid street) address?",
  "where do you live..?",
  "enter your street address"
]

const zipText = [
  "what's your (valid 5-digit) zip code?",
  "enter your zip code",
  "enter your area code (haha get it)",
]