import React, { Component } from 'react'
import {
  TextField,
  Button
} from '@material-ui/core'
import StateSelect from './StateSelect'
import StateSelectNative from './StateSelect.Native'

export default class Form extends Component {
  state = {
    isFilled: false,
    shippingInfo: {
      name: undefined,
      phone: undefined,
      street: undefined,
      city: undefined,
      zip: undefined,
      state: undefined
    },
    helperText: {}
  }

  componentDidMount() {
    const helperText = {
      name: nameText[Math.floor(Math.random() * nameText.length)],
      phone: phoneText[Math.floor(Math.random() * phoneText.length)],
      street: streetText[Math.floor(Math.random() * streetText.length)],
      city: cityText[Math.floor(Math.random() * cityText.length)],
      zip: zipText[Math.floor(Math.random() * zipText.length)]
    }
    this.setState({ helperText })
  }

  componentDidUpdate() {
    const { 
      isFilled, 
      shippingInfo 
    } = this.state
    if(!isFilled) {
      console.log("is not filled")
      const {
        name,
        phone,
        street,
        city,
        zip,
        state
      } = shippingInfo
      if(name && phone && street && city && zip && state) {
        this.setState({ isFilled: true })
      }
    }
  }

  handleSubmit = () => {
    const { shippingInfo } = this.state
    this.props.handleSubmit(shippingInfo)
  }

  handleSetName = e => {
    const shippingInfo = {
      ...this.state.shippingInfo,
      name: e.target.value
    }
    this.setState({ shippingInfo })
  }

  handleSetPhone = e => {
    const shippingInfo = {
      ...this.state.shippingInfo,
      phone: e.target.value
    }
    this.setState({ shippingInfo })
  }

  handleSetStreet = e => {
    const shippingInfo = {
      ...this.state.shippingInfo,
      street: e.target.value
    }
    this.setState({ shippingInfo })
  }

  handleSetCity = e => {
    const shippingInfo = {
      ...this.state.shippingInfo,
      city: e.target.value
    }
    this.setState({ shippingInfo })
  }

  handleSetZip = e => {
    const shippingInfo = {
      ...this.state.shippingInfo,
      zip: e.target.value
    }
    this.setState({ shippingInfo })
  }

  handleSetState = e => {
    console.log(e)
    const shippingInfo = {
      ...this.state.shippingInfo,
      state: e.target.value
    }
    this.setState({ shippingInfo })
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
          onChange={this.handleSetName}
          helperText={this.state.helperText.name}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="phone"
          onChange={this.handleSetPhone}
          helperText={this.state.helperText.phone}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="street address"
          onChange={this.handleSetStreet}
          helperText={this.state.helperText.street}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="city"
          onChange={this.handleSetCity}
          helperText={this.state.helperText.city}
          required
          style={styles.textEntry}
        />

        <TextField 
          label="zip"
          onChange={this.handleSetZip}
          helperText={this.state.helperText.zip}
          required
          style={styles.textEntry}
        />

        {device.isMobile
          ? <StateSelectNative handleSetState={this.handleSetState} />
          : <StateSelect handleSetState={this.handleSetState} />
        }

        <Button variant="outlined"
          onClick={this.handleSubmit}
          style={styles.submitButton}
          disabled={!this.state.isFilled}
        >
          proceed to checkout
        </Button>
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
  },
  submitButton: {
    width: '80%',
    margin: '10px auto',
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

const cityText = [
  "what city do you live in?",
  "enter your city",
]

const zipText = [
  "what's your (valid 5-digit) zip code?",
  "enter your zip code",
  "enter your area code (haha get it)",
]