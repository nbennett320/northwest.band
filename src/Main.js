import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Header from './components/header/Header'
import BlmPanel from './views/panels/BlmPanel'
import Home from './views/home/Home'
import Music from './views/music/Music'
import Lyrics from './views/music/Lyrics'
import Merch from './views/merch/Merch'
import ProductPage from './views/product-page/ProductPage'
import CartPage from './views/cart-page/CartPage'
import Shipping from './views/shipping-page/ShippingPage'
import CheckoutPage from './views/checkout-page/CheckoutPage'
import Goodies from './views/goodies/Goodies'
import Demos from './views/demos/Demos'
// import Contact from './views/contact/Contact'
import ScrollToTop from './util/ScrollToTop'
import NoMatch from './views/no-match/NoMatch'
import './css/main.css'

// query device size
const mql = window.matchMedia(`(max-width: 633px)`)
const vpWidth = window.innerWidth
const vpHeight = window.innerHeight

if(!sessionStorage.getItem("hasShownPanel")) {
  sessionStorage.setItem("hasShownPanel", "false")
}

class Main extends Component {
  constructor() {
    this.state = {
      cart: [],
      showCart: false,
      headerLink: '..',
      vpWidth,
      vpHeight,
      isMobile: mql.matches,
      from: {
        path: ''
      }
    }
  }

  setDestination = props => {
    sessionStorage.setItem("hasShownPanel", "true")
    this.setState({
      from: {
        ...this.state.from,
        path: props.from
      }
    })
  }

  addItemToCart = (itemAdded, match) => {
    // add match object and 4 digit code to easily access and remove items
    const item = {
      ...itemAdded,
      instanceCode: (Math.random()*0xFFFFFF<<0).toString(16).substring(0,4),
      match
    }
    let items = this.state.cart
    items.push(item)
    localStorage.setItem("cart", JSON.stringify(items))
    this.setState({
      cart: items,
      showCart: items.length > 0
    })
    console.log(this.state.cart)
  }

  removeItemFromCart = item => {
    let { cart } = this.state
    for(let i = 0; i < cart.length; i++) {
      if(cart[i].instanceCode === item.instanceCode) {
        cart.splice(i, 1)
        break
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    this.setState({
      cart: cart,
      showCart: cart.length > 0
    })
  }

  setHeaderLink = link => {
    this.setState({headerLink: link})
  }

  render() {
    const {
      cart,
      showCart,
      headerLink,
      vpWidth,
      vpHeight,
      isMobile,
      from
    } = this.state
    return (
      <Router>
        <ScrollToTop>
          <Header
            cart={cart}
            showCart={showCart}
            headerLink={headerLink}
          />

          <Switch>
            <Route exact path='/blm'
              render={props => <BlmPanel 
                {...props}
                from={from}
              />}
            />

            <Route exact path='/'
              render={props => <Home
                {...props}
                setHeaderLink={this.setHeaderLink}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            <Redirect
              from='/home'
              to='/'
            />

            {/* redirect from /songs/ to /music for cases where user tries
            to link there directly */}
            {/* <Redirect
              from='/music/:key'
              to='/music/'
            /> */}

            <Route exact path='/music' 
              render={(props) => <Music 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
              />}
            />

            <Route exact path='/music/:key'
              render={(props) => <Lyrics 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                setDestination={this.setDestination}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
              />}
            
            />

            {/* redirect from /songs/ to /music for cases where user tries
            to link there directly */}
            <Redirect 
              from='/songs'
              to='/music'
            />

            <Route path='/merch' 
              render={(props) => <Merch 
                {...props}
                setHeaderLink={this.setHeaderLink}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
              />}
            />

            {/* redirect from /merch/ to /products/ for cases where user tries
            to go to a certain item's page directly */}
            <Redirect 
              from='/merch/:model/:color'
              to='/products/:model/:color'
            />

            {/* redirect from /merch/ to /products/ for cases where user tries
            to go to a certain item's page directly (without specifying color) */}
            <Redirect 
              from='/merch/:model/'
              to='/products/:model/'
            />

            {/* redirect from /merch/* to /merch for cases where user tries
            to go to impropper page directly */}
            <Redirect 
              from='/merch/*'
              to='/merch'
            />

            <Route path='/products/:model/:color' 
              render={(props) => <ProductPage 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                addItemToCart={this.addItemToCart}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            <Route path='/products/:model/' 
              render={(props) => <ProductPage 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                addItemToCart={this.addItemToCart}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            {/* redirect from /products/ to /merch for cases where user tries
            to link there directly */}
            <Redirect 
              from='/products'
              to='/merch'
            />

            {/* redirect from /products/* to /merch for cases where user tries
            to link there directly */}
            <Redirect 
              from='/products/*'
              to='/merch'
            />

            <Route path='/cart' 
              render={(props) => <CartPage 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                cart={cart}
                addItemToCart={this.addItemToCart}
                removeItemFromCart={this.removeItemFromCart}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            <Route path='/shipping'
              render={(props) => <Shipping 
                {...props}
                setHeaderLink={this.setHeaderLink}
                cart={cart}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            <Route path='/checkout' 
              render={(props) => <CheckoutPage 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                cart={cart}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            <Route path='/goodies' 
              render={(props) => <Goodies 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                setDestination={this.setDestination}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
              />}
            />

            {/* catch any additional param errors */}
            <Redirect 
              from='/goodies/*'
              to='/goodies'
            />

            <Route path='/demos' 
              render={(props) => <Demos 
                {...props} 
                setHeaderLink={this.setHeaderLink}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
                setDestination={this.setDestination}
              />}
            />

            {/* <Route path='/vault' 
              render={(props) => <Goodies 
                {...props} 
                setHeaderLink={this.setHeaderLink}
              />}
            /> */}

            {/* <Route path='/cart' 
              render={(props) => <ViewCartPage 
                {...props}
                itemsInCart={this.state.itemsInCart}
                numberOfItemsInCart={this.getNumberOfItemsInCart()}
                cartHasItems={this.state.cartHasItems}
                
                removeItem={this.removeItem}
                totalPrice={this.state.totalPrice}
                setTotalPrice={this.setTotalPrice}
                setHeaderLink={this.setHeaderLink}
              />} 
            />

            <Route path='/place-order' 
              render={(props) => <PlaceOrderPage
                {...props} 
                itemsInCart={this.state.itemsInCart}
                cartHasItems={this.state.cartHasItems}
                totalPrice={this.state.totalPrice}
                setFullAddress={this.setFullAddress}
                setOrderInfo={this.setOrderInfo}
                setHeaderLink={this.setHeaderLink}
              />} 
            />

            <Route path='/order-summary'
              render={(props) => <OrderSummary
                {...props} 
                itemsInCart={this.state.itemsInCart}
                cartHasItems={this.state.cartHasItems}
                totalPrice={this.state.totalPrice}
                fullAddress={this.state.orderInfo.fullAddress}
                orderInfo={this.state.orderInfo}
                setHeaderLink={this.setHeaderLink}
              />} 
            /> */}

            {/* <Route path='/contact'
              render={(props) => <Contact
                {...props} 
                setHeaderLink={this.setHeaderLink}
              />} 
            /> */}

            {/* <Route path='/admin'
              render={(props) => <Admin
                {...props} 
                setHeaderLink={this.setHeaderLink}
              />} 
            /> */}

            {/* catch all unknown routes (error 404) */}
            <Route path='/*'
              render={(props) => <NoMatch
                {...props} 
                setHeaderLink={this.setHeaderLink}
                device={{
                  vpWidth: vpWidth,
                  vpHeight: vpHeight,
                  isMobile: isMobile,
                }}
              />} 
            />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}

export default Main