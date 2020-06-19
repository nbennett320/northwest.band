import React, { Component } from 'react'
import ProductListing from './ProductListing'
import products from '../../assets/data/Products.json'

class Products extends Component {
  makeCatalog = filter => {
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
          image={require(`../../assets/img/merch/500/${product["image"]}${product.attributes.colors[randomNum(product.attributes.colors.length)]}.jpg`)}
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
          image={require(`../../assets/img/merch/500/${product["image"]}${product.attributes.colors[randomNum(product.attributes.colors.length)]}.jpg`)}
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
    return (
      <div style={styles.main}>
        {this.makeCatalog()}
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