import React, { Component } from 'react'
import {
  Typography,
} from '@material-ui/core'
import { 
  createMuiTheme, 
  ThemeProvider 
} from '@material-ui/core/styles'
import Artwork from './Artwork'
import SongList from './SongList'

export default class Album extends Component {
  render() {
    const { title, date, img } = this.props
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#fff',
        },
      },
    })
    const style = this.props.device.isMobile 
      ? styles.mobile
      : styles.main
    
    return (
      <div style={style.main}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color='secondary'> {title.toLowerCase()} </Typography>
          <Typography variant="subtitle1" color='secondary'> {date.toLowerCase()} </Typography>
          <Artwork
            img={img}
            name={title}
            device={this.props.device}
          />
          <SongList album={title} />
        </ThemeProvider>
      </div>
    )
  }
}

const styles = {
  main: {
    main: {
      maxWidth: 'calc(500px * .7)',
      minWidth: 'calc(500px * .7)',
      width: 'auto',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },
  
    header: {
      maxWidth: 'calc(500px * .7)',
      minWidth: 'calc(500px * .7)',
      width: 'auto',
      margin: '0 auto'
    }
  },

  mobile: {
    main: {
      maxWidth: '70%',
      minWidth: '70%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },
  
    header: {
      maxWidth: '70%',
      minWidth: '70%',
      width: 'auto',
      margin: '0 auto'
    }
  }
}