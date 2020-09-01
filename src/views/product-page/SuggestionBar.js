import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import ProductListing from '../merch/ProductListing'
// import products from '../../assets/data/Products.json'

export default class SuggestionBar extends Component {
  makeSuggestions = () => {
    const { item, device } = this.props
    const clothing = products["clothing"]
    const other = products["other"]

    // map clothing to array of jsx
    const clothingArr = Object.keys(clothing).map(i => {
      const product = clothing[i]
      if ((item.attributes.style === product.attributes.style) 
      || (item.attributes.subcategory === product.attributes.subcategory))
        return (
          <ProductListing 
            className="no-box-shadow"
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
      if ((item.attributes.style === product.attributes.style) 
      || (item.attributes.subcategory === product.attributes.subcategory))
        return (
          <ProductListing 
            className="no-box-shadow"
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

    console.log(clothingArr)
    
    // spread and return components
    return [...clothingArr, ...otherArr]
  }

  render() {
    const { item } = this.props
    return (
      <div style={styles.main}>
        <Typography variant="subtitle1">
          you might like
        </Typography>
        <div style={styles.suggestions}>
          {item && this.makeSuggestions()}
        </div>
      </div>
    )
  }
}

const randomNum = max => Math.floor(Math.random() * Math.floor(max))

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 !important',
  }, 

  suggestions: {
    width: 'auto',
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '0 !important',
  }
}