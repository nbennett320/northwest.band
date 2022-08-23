import React, { Component } from 'react'
import ShareIcon from '@material-ui/icons/Share'
import { 
  Typography,
  IconButton,
} from '@material-ui/core'

class Share extends Component {
  handleClick = async () => {
    const { pathname } = this.props.location
    const loc = `https://northwest.band${pathname}`
    try {
      navigator.share(loc)
    } catch {
      console.warn("is this really a mobile browser?")
    }
  }

  render() {
    return (
      <li style={styles.main}
        onClick={this.handleClick}
      >
        <IconButton>
          <ShareIcon color='secondary' />
        </IconButton>

        <Typography
          variant='subtitle2'
          color='inherit'
        >
          share this page
        </Typography>
      </li>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyleType: 'none',
    color: 'rgba(255,255,255,0.82)',
    marginLeft: '10%',
    marginRight: 'auto',
  },

  popupContent: {
    backgroundColor: 'rgba(0,0,0,1)',
    padding: '4px 8px',
    zIndex: '20'
  }
}

export default Share