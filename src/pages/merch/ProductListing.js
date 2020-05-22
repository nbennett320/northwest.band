import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductListingText from './ProductListingText'
import ProductListingImage from './ProductListingImage'

class ProductListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      isHovering: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      isHovering: false
    })
  }

  render() {
    const {
      title,
      price,
      description,
      attributes,
      image,
      zIndex,
      scale
    } = this.props
    const { model } = attributes
    const { isHovering } = this.state
    
    return (
      <Link to={`/products/${makeKey(model)}`}
        className={["product-preview", this.props.className ? this.props.className : ''].join(' ')}
        style={{
          ...styles[`${scale()}`].main,
          zIndex: `${10 + zIndex}`,
          ...isHovering
            ? { filter: 'brightness(1.075)' }
            : { filter: 'none' }
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <ProductListingImage
          img={image}
          description={description}
        />

        <ProductListingText
          title={title}
          price={price}
          isHovering={this.state.isHovering}
        />
      </Link>
    )
  }
}

const makeKey = model => model.replace(/\s/g, '-').toLowerCase()

const styles = {
  m: {
    main: {
      maxWidth: '33.333333%',
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      backgroundColor: 'rgba(255,255,255,1)',
      boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 8px 2px',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  },

  sm: {
    main: {
      maxWidth: '50%',
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      backgroundColor: 'rgba(255,255,255,1)',
      boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 8px 2px',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  },

  lg: {
    main: {
      maxWidth: '20%',
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      backgroundColor: 'rgba(255,255,255,1)',
      boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 8px 2px',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  }
}

export default ProductListing