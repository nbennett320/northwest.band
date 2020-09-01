import React, { Component } from 'react'
import ProductListing from './ProductListing'
import server from '../../server.config'
import { Hidden } from '@material-ui/core'

class Products extends Component {
  state = {
    products: {}
  }

  componentDidMount() {
    this.getProducts()
  }

  // get product data
  getProducts = async () => {
    // in the future: server/products?num_of_items=20&other_param=something
    const products = await fetch(`${server}/products`,
      {
        method: 'GET',
      }).then(res => res.json())
    this.setState({ products })
  }

  makeCatalog = filter => {
    const { products } = this.state
    const { device } = this.props
    const clothing = products["clothing"]
    const other = products["other"]

    // map clothing to array of jsx
    const clothingArr = Object.keys(clothing).map(i => {
      const product = clothing[i]
      return (
        <ProductListing 
          title={product["title"]}
          price={product["price"]}
          image={`${server}/assets/img/merch/500/${product["image"]}${product.attributes.colors[randomNum(product.attributes.colors.length)]}.jpg`}
          description={product["description"]}
          attributes={product["attributes"]}
          zIndex={i}
          key={i}
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />
      )
    })

    // map other stuff to array of jsx
    const otherArr = Object.keys(other).map(i => {
      const product = other[i]
      return (
        <ProductListing 
          title={product["title"]}
          price={product["price"]}
          image={`${server}/assets/img/merch/500/${product["image"]}${product.attributes.colors[randomNum(product.attributes.colors.length)]}.jpg`}
          description={product["description"]}
          attributes={product["attributes"]}
          zIndex={i + clothingArr.length}
          key={i + clothingArr.length}
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />
      )
    })
    
    // spread and return components
    return [...clothingArr, ...otherArr]
  }

  render() {
    const { products } = this.state
    if(Object.keys(products).length > 0)
      return (
        <div style={styles.main}>
          {this.makeCatalog()}
        </div>
      )
    else return (
      <div style={{display: 'none'}}> 
        ( loading )
      </div>
    )
  }
}

const randomNum = max => Math.floor(Math.random() * Math.floor(max))

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    paddingTop: '0'
  }
}

export default Products