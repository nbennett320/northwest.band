import React from 'react'
import { Link } from 'react-router-dom'

const Cloud = props => {
  const [isHovering, setIsHovering] = React.useState(false);

  const { 
    link, 
    stylesProp, 
    images, 
    isMobile 
  } = props

  const toggleHover = () => setIsHovering(!isHovering)

  return (
    <div className="cloud"
      style={{
        ...stylesProp.cloud,
        ...isMobile ? {} : {...styles.desktop.cloud},
        backgroundImage: `url(${require('../../' + images.cloud)})`
      }}
    >
      <Link to={`${link}`}>
        <div
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          style={isHovering 
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

const styles = {
  desktop: {
    cloud: {
      margin: '20px auto',
    },
  },

  text: {
    position: 'relative',
    zIndex: '15',
  }
}

export default Cloud
