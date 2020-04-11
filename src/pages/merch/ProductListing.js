import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductListingText from './ProductListingText'

class ProductListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: undefined,
            isHovering: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { imageSrc, attributes } = this.props
        const { colors } = attributes
        console.log(`../..${imageSrc}${colors[randomNum(colors.length)]}.jpg`)
        if(this.state.isHovering !== prevState.isHovering) {
            this.setState({
                image: `../..${imageSrc}${colors[randomNum(colors.length)]}.jpg`
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
        const { title, price, description, attributes, zIndex } = this.props
        const model = attributes["model"]
        console.log(this.props)
        const { image, isHovering } = this.state
        console.log(this.state)
        
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
                <img src={image ? require(image) : ''}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    alt={description}
                    style={styles.image}
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
    },

    image: {
        width: '90%',
        margin: '5%',
        borderRadius: '0',
    },
}

export default ProductListing