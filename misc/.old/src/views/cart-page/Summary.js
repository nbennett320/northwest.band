import React, { Component } from 'react'
import { 
  Typography
} from '@material-ui/core'
import Price from './Price'

export default class Summary extends Component {
  render() {
    const { cart, history } = this.props
    return (
      <span style={styles.main}>
        <Typography variant="h6">
          summary
        </Typography>

        <Price 
          cart={cart}
          history={history}
        />
      </span>
    )
  }
}

const styles = {
  main: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 0 0 5%',
    padding: '4px 0'
  }
}