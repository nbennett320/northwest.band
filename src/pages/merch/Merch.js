import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import StoreHeader from './StoreHeader'
import Products from './Products'
import Footer from '../../components/Footer'

class Merch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFilters: false,
      filteredBy: undefined,
    }
  }

  componentDidMount () {
    this.props.setHeaderLink('/')
  }

  render() {
    const { device } = this.props
    return (
      <div style={styles.main}>
        {helmet}

        <StoreHeader 
          filter={this.state.filteredBy} 
          numItemsInCart={this.state.numItemsInCart}
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />

        <Products 
          device={device}
        />

        <Footer />
      </div>
    )
  }
}

const helmet = (
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
    <meta name="description" content="
      Northwest shirts, hoodies, physical music and more.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band/merch" />
    <title>northwest the band | shirts, hoodies, and more</title>
  </Helmet>
)

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
  }
}

export default Merch