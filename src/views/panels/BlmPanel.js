import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import HyperLink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'

export default class BlmPanel extends Component {
  render() {
    const { from } = this.props
    return (
      <div 
        className="view" 
        style={styles.main}
      >
        <Typography variant="body2" style={styles.text}>
          Black lives matter. &nbsp;
        </Typography>
        <HyperLink href="https://support.eji.org/give/153413/#!/donation/checkout"
          variant="body2"
          style={{...styles.text, textDecoration: 'underline'}}
        > 
          Support the Equal Justice Initiative.
        </HyperLink>
        <Link to={`${from.path !== '/blm' 
          ? from.path 
          : () => {
            sessionStorage.setItem("hasShownPanel", "true")
            return '/blm'
        }}`}
          style={styles.bottomLink}
        >
          <Typography
            variant="caption"
            style={{
              ...styles.text, 
              textDecoration: 'underline',
              bottom: '20px',
            }}
          >
            Continue to page 
          </Typography>
        </Link>
      </div>
    )
  }
}

const styles = {
  main: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    zIndex: '5050',
    overflowX: 'hidden',
    overflowY: 'hidden'
  },

  text: {
    color: '#fff'
  },

  bottomLink: {
    position: 'absolute',
    bottom: '20px',
  }
}