import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AnimatedImage extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      isHovering: false
    }
  }

  toggleHover = () => this.setState({isHovering: !this.state.isHovering})

  render() {
    const { 
      link, 
      stylesProp, 
      images,
      ids
    } = this.props
    return (
      <div className="animated-image"
        id={`${ids.image}`}
        style={{
          ...styles.main,
          ...stylesProp.image,
          backgroundImage: `url(${require('../../' + images.image)})`
        }}
      >
        <Link to={`${link}`}>
          <div id={`${ids.text}`}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            style={this.state.isHovering 
                ? {
                  ...stylesProp.text.hover,
                  ...styles.text,
                  backgroundImage: `url(${require('../../' + images.text.hover)})`
                } : {
                  ...stylesProp.text.main,
                  ...styles.text,
                  backgroundImage: `url(${require('../../' + images.text.main)})`
                }
            }
          />
        </Link>
      </div>
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
  }
}