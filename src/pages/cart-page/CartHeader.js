import React, { Component } from 'react'
import {
  Typography
} from '@material-ui/core'

export default class CartHeader extends Component {
  state = {
    image: undefined,
  }

  componentDidUpdate (prevProps) {
    if(this.props !== prevProps) {
      this.setState({
        image: this.getImage(),
      })
    }
  }

  getImage = () => require(`../../img/store/store_header_imgs/${randomNum(12)}.jpg`)

  render() {
    const { scale } = this.props
    return (
      <div style={{
        ...styles[`${scale()}`].main,
        backgroundImage: `url('${this.state.image}')`,
      }}>
        <Typography variant="h3">
          cart
        </Typography>
      </div>
    )
  }
}

const randomNum = max => Math.floor(Math.random() * Math.floor(max))

const styles = {
  m: {
    main: {
      width: '100%',
      height: 'calc(250px + 5vh)',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  },
  
  sm: {
    main: {
      width: '100%',
      height: 'calc(250px)',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  },

  lg: {
    main: {
      width: '100%',
      height: 'calc(250px + 10vh)',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  }
}