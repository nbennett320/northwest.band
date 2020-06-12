import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Divider } from '@material-ui/core'
import ProductOverview from './ProductOverview'
import ProductDetails from './ProductDetails'
import Footer from '../../components/footer/Footer'
import products from '../../data/Products.json'
import SuggestionBar from './SuggestionBar'

export default class ProductPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      model: props.match.params.model,
      item: undefined
    }
  }

  componentDidMount() {
    this.props.setHeaderLink('/merch')
    const { match } = this.props
    const product = this.getProduct(match.params.model)
    console.log("product", product)
    //const urlHasColor = product.attributes.colors.includes(match.params.color)
    const selectedColor = product.attributes.colors.includes(match.params.color)
      ? match.params.color
      : product.attributes.colors[0]
    console.log("selected color:" , selectedColor)
    // color defaults to first listing in the 
    // Products.json file if nothing defined in url params,
    // size defaults to "medium"
    const item = {
      ...product,
      selectedColor: selectedColor,
      selectedSize: "medium"
    }
    console.log(item)
    if(item) 
      this.setState({
        item: item,
      })
    console.log(this.state)
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props
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
    console.log("model:", model)
    Object.values(products).forEach((el, i) => {
      console.log(el)
      Object.values(el).forEach((product, j) => {
        console.log(product)
        if(product.attributes.model.includes(reverseKey(model)) 
          || product.attributes.model.includes(model)) {
            match = product
        }
      })
    })
    console.log("match", match)
    return match 
      ? match
      : false
  }

  setColor = color => {
    const item = {
      ...this.state.item,
      selectedColor: color
    }
    this.setState({
      item: item
    })
  }

  setSize = size => {
    const item = {
      ...this.state.item,
      selectedSize: size
    }
    this.setState({
      item: item
    })
  }

  // push url into history when color updates
  setURL = url => {
    this.props.history.push(url)
  }

  render() {
    const { match, device } = this.props
    const { item, model } = this.state
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

        {item && <ProductOverview
          item={item}
          model={model}
          setColor={this.setColor}
          setSize={this.setSize}
          setURL={this.setURL}
          addItemToCart={this.props.addItemToCart}
          match={match}
          device={device}
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />}

        <Divider />
        {item && <ProductDetails 
          item={item}
        />}

        {/* <SuggestionBar 
          item={item} 
          device={device}
        /> */}

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
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 'calc(5vh + 40px)'
  }
}