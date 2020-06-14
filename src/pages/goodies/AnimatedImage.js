import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AnimatedImage extends Component {
  render() {
    const { 
      link, 
      stylesProp, 
      images,
      ids
    } = this.props
    return (
      <Link to={`${link}`} 
        style={styles.container} 
        className="animated-image"
      >
        <div id={`${ids.image}`}
          style={{
            ...styles.main,
            ...stylesProp.image,
            backgroundImage: `url(${require('../../' + images.image)})`
          }}
        >

        <div id={`${ids.text}`}
          style={{
            ...stylesProp.text.main,
            ...styles.text,
            backgroundImage: `url(${require('../../' + images.text.main)})`
          }}
        />
        </div>
      </Link>
    )
  }
}

const styles = {
  main: {
    margin: '0 auto',
  },

  text: {
    position: 'relative',
    zIndex: '15',
  },

  container: {
    display: 'flex',
    justifyContainer: 'center',
    alignItems: 'center'
  }
}