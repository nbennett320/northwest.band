import React from 'react'
import { connect } from 'react-redux'
import {
  Typography,
} from '@material-ui/core'
import { 
  createMuiTheme, 
  ThemeProvider 
} from '@material-ui/core/styles'
import Artwork from './Artwork'
import SongList from './SongList'

const Album = props => {
  const { 
    title, 
    date, 
    img, 
    device 
  } = props
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
  const style = device.isMobile 
    ? styles.mobile
    : styles.main
  
  return (
    <div style={style.main}>
      <ThemeProvider theme={theme}>
        <Typography 
          variant="h4" 
          color='secondary'
        > 
          {title.toLowerCase()}
        </Typography>
        <Typography 
          variant="subtitle1" 
          color='secondary'
        > 
          {date.toLowerCase()}
        </Typography>
        <Artwork
          img={img}
          name={title}
        />
        <SongList album={title} />
      </ThemeProvider>
    </div>
  )
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

const mapStateToProps = state => ({
  device: state.device
})

export default connect(
  mapStateToProps
)(Album)