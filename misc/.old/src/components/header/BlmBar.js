import React, { Component } from 'react'
import { Link, Typography } from '@material-ui/core'

export default class BlmBar extends Component {
  render() {
    return (
      <span style={styles.main}>
        <Typography variant="body2" style={styles.text}>
          Black lives matter. &nbsp;
        </Typography>
        <Link href="https://support.eji.org/give/153413/#!/donation/checkout"
          variant="body2"
          style={{...styles.text, textDecoration: 'underline'}}
        > 
          Support the Equal Justice Initiative.
        </Link>
      </span>
    )
  }
}

const styles = {
  main: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '0',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  text: {
    color: '#fff'
  }
}