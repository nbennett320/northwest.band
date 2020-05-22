import React, { Component } from 'react'
import { 
  Typography, 
  Button
} from '@material-ui/core'

export default class NoItems extends Component {
  handleClick = () => {
    this.props.history.push('/merch')
  }

  render() {
    return (
      <div style={styles.main}>
        <Typography variant="h6"
          style={styles.text}
        >
          your cart is empty!!
        </Typography>

        <div style={styles.button}>
          <Button variant="outlined"
            onClick={this.handleClick}
            style={{textTransform: 'lowercase'}}
          >
            back to the store
          </Button>
        </div>
        
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  text: {
    paddingTop: '20px',
    margin: '0 auto',
  },

  button: {
    padding: '40px',
    margin: '0 auto',
  }
}