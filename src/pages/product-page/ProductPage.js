import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ProductOverview from './ProductOverview'
import ProductDetails from './ProductDetails'
import Footer from '../../components/Footer'
import products from '../../data/Products.json'

export default class ProductPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      model: props.match.params.model,
      item: undefined
    }
  }

  componentDidMount() {
    const { match } = this.props
    const product = this.getProduct(match.params.model)
    const item = {
      ...product,
      selectedColor: product.attributes.colors[0]
    }
    console.log(item)
    if(item) 
      this.setState({
        item: item,
      })
    console.log(this.state)
  }

  componentDidUpdate(prevProps) {
    const { match, location } = this.props
    if(this.props !== prevProps) {
      // handle route changed
      this.setState({
        model: match.params.model,
        
      })
    }
  }

  // there's def a better way to do this LOL
  getProduct = model => {
    let match
    Object.values(products).forEach((el, i) => {
      Object.values(el).forEach((product, j) => {
        if(product.attributes.model.includes(reverseKey(model))) {
          match = product
        }
      })
    })
    return match 
      ? match
      : false
  }

  render() {
    const { device } = this.props
    const { item } = this.state
    const info = item && {
      title: item.title,
      color: item.selectedColor,
      description: item.description,
      model: item.attributes.model
    }
    console.log(this.props)
    console.log(this.state)
    return (
      <div style={styles.main}>
        {item && helmet(info)}

        <ProductOverview
          item={item}
          device={device}
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />

        <ProductDetails />

        <Footer />
      </div>
    )
  }
}

const reverseKey = model => model.replace(/-/g,' ').replace(/[.()]/g,'').toLowerCase()

const helmet = info => (
  <Helmet>
      <meta charset="utf-8" />
      <meta name="keywords" 
          content="
              northwest, 
              northwest the band, 
              northwest band,
              music, 
              band, 
              merch, 
              merchandise, 
              clothing, 
              screen print, 
              band tees, 
          "
      />
      <link rel="canonical" href="http://northwest.band" />
      <meta name="author" content="Noah Bennett" />
      <meta name="description" content={`
          A ${info.color} ${info.description}.
      `} />
      <meta name="robots" content="index" />
      <meta name="url" content={`http://northwest.band/products/${info.model}`} />
      <title> northwest the band | {info.title} </title>
  </Helmet>
)

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column'
  }
}