import React, { Component } from 'react'
import {
  Typography
} from '@material-ui/core'

export default class ImageBlock extends Component {
  state = {
    image: undefined
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
      this.setState({
        image: this.getImage(),
      })
    }
  }

  getImage = () => require(`../assets/img/store/store_header_imgs/${randomNum(12)}.jpg`)

  render() {
    const { image } = this.state
    const { text, scale } = this.props
    return (
      <div style={{
        ...styles.image,
        ...styles[`${scale()}`],
        backgroundImage: `url('${image}')`,
      }}>
        <Typography 
          variant="h5"
          color="inherit"
          style={styles.text}
        >
          {text}
        </Typography>
      </div>
    )
  }
}

const randomNum = max => Math.floor(Math.random() * Math.floor(max))

const styles = {
  image: {
    width: '100%',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    padding: '40px',
    paddingTop: 'calc(5vh + 40px)',
    color: 'rgba(255,255,255,0.86)'
  },

  m: {
    height: 'calc(250px + 5vh)',
  },
  
  sm: {
    height: 'calc(250px)',
  },

  lg: {
    height: 'calc(250px + 10vh)',
  }
}