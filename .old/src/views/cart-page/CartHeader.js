import React, { Component } from 'react'
import server from '../../server.config'

export default class CartHeader extends Component {
  render() {
    const { scale } = this.props
    return (
      <div style={{
        ...styles[`${scale()}`].main,
        backgroundImage: `url('${server}/assets/img/store/store_header_imgs/${randomNum(12)}.jpg')`,
      }}/>
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
      height: '200px',
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