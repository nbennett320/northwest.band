import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Divider } from '@material-ui/core'
import ProductOverview from './ProductOverview'
import ProductDetails from './ProductDetails'
import Footer from '../../components/footer/Footer'
// import SuggestionBar from './SuggestionBar'
import server from '../../server.config'

export default class ProductPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      model: props.match.params.model,
      item: undefined,
    }
  }

  componentDidMount() {
    this.props.setHeaderLink('/merch')
    const { match } = this.props
    this.getProduct(match.params.model)
      .then(() => {
        const { item } = this.state
        const selectedColor = item.attributes.colors.includes(match.params.color)
          ? match.params.color
          : item.attributes.colors[0]
        // color defaults to first listing in the 
        // Products.json file if nothing defined in url params,
        // size defaults to "medium"
        const newItem = {
          ...item,
          selectedColor: selectedColor,
          selectedSize: "medium"
        }
        if(newItem) 
          this.setState({
            item: newItem,
          })
      })
    
    const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
    // uses boolean as string
    if(hasShownBlmPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }
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

  // get product data
  getProduct = async (model) => {
    // in the future: server/products?num_of_items=20&other_param=something
    const item = await fetch(`${server}/products/${model}`,
      {
        method: 'GET',
      }).then(res => res.json())
    this.setState({ item })
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
    return (
      <div className="view padding-for-header">
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

        <Footer location={this.props.location} />
      </div>
    )
  }
}

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