import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductListingText from './ProductListingText'
import ProductImage from './ProductImage'

class ProductListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      isHovering: false,
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.props !== prevProps) {
      const { imageSrc, attributes } = this.props
      const { colors } = attributes
      const path = '../../img/img_merch/img_500x500/'
      const image = `${imageSrc}${colors[randomNum(colors.length)]}.jpg`
      console.log("path: ", path)
      console.log("image: ", image)
      this.setState({
        image: path + image
      })
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
      zIndex,
    } = this.props
    const model = attributes["model"]
    const { image, isHovering } = this.state
    
    return (
      <Link to={`/products/${makeKey(model)}`}
        className="product-preview" 
        style={{
          ...styles.main,
          zIndex: `${10 + zIndex}`,
          ...isHovering 
            ? {filter: 'brightness(1.075)'}
            : {filter: 'none'}
        }}
      >
        {image && <ProductImage 
          img={image}
          description={description}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />}

        <ProductListingText 
          title={title}
          price={price}
          isHovering={this.state.isHovering}
        />
      </Link>
    )
  }
}

const makeKey = model => model.replace(/\s/g,'-').toLowerCase()

const randomNum = max => Math.floor(Math.random() * Math.floor(max))

const styles = {
  main: {
    maxWidth: '33.333333%',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 8px 2px',
    cursor: 'pointer',
  }
}

export default ProductListing