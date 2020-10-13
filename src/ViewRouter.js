import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import {
  BlmPanel,
  Home,
  Music,
  Lyrics,
  Merch,
  ProductPage,
  CartPage,
  ShippingPage,
  CheckoutPage,
  Goodies,
  Demos,
  NoMatch
} from './views'

const ViewRouter = props => {
  return (
    <Switch>
      {/* <Route exact path='/blm'
        render={h => <BlmPanel 
          {...h}
          from={from}
        />}
      /> */}

      <Route exact path='/'
        render={h => <Home
          {...h}
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
        render={h => <Music 
          {...h} 
          device={props.device}
        />}
      />

      <Route exact path='/music/:key'
        render={h => <Lyrics 
          {...h} 
        />}
      
      />

      {/* redirect from /songs/ to /music for cases where user tries
      to link there directly */}
      <Redirect 
        from='/songs'
        to='/music'
      />

      <Route path='/merch' 
        render={h => <Merch 
          {...h}
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
        render={h => <ProductPage 
          {...h} 
        />}
      />

      <Route path='/products/:model/' 
        render={h => <ProductPage 
          {...h} 
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
        render={h => <CartPage 
          {...h} 
        />}
      />

      <Route path='/shipping'
        render={h => <ShippingPage 
          {...h}
        />}
      />

      <Route path='/checkout' 
        render={h => <CheckoutPage 
          {...h} 
        />}
      />

      <Route path='/goodies' 
        render={h => <Goodies 
          {...h} 
        />}
      />

      {/* catch any additional param errors */}
      <Redirect 
        from='/goodies/*'
        to='/goodies'
      />

      <Route path='/demos' 
        render={h => <Demos 
          {...h} 
        />}
      />

      {/* <Route path='/vault' 
        render={h => <Goodies 
          {...h} 
          setHeaderLink={this.setHeaderLink}
        />}
      /> */}

      {/* <Route path='/cart' 
        render={h => <ViewCartPage 
          {...h}
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
        render={h => <PlaceOrderPage
          {...h} 
          itemsInCart={this.state.itemsInCart}
          cartHasItems={this.state.cartHasItems}
          totalPrice={this.state.totalPrice}
          setFullAddress={this.setFullAddress}
          setOrderInfo={this.setOrderInfo}
          setHeaderLink={this.setHeaderLink}
        />} 
      />

      <Route path='/order-summary'
        render={h => <OrderSummary
          {...h} 
          itemsInCart={this.state.itemsInCart}
          cartHasItems={this.state.cartHasItems}
          totalPrice={this.state.totalPrice}
          fullAddress={this.state.orderInfo.fullAddress}
          orderInfo={this.state.orderInfo}
          setHeaderLink={this.setHeaderLink}
        />} 
      /> */}

      {/* <Route path='/contact'
        render={h => <Contact
          {...h} 
          setHeaderLink={this.setHeaderLink}
        />} 
      /> */}

      {/* <Route path='/admin'
        render={h => <Admin
          {...h} 
          setHeaderLink={this.setHeaderLink}
        />} 
      /> */}

      {/* catch all unknown routes (error 404) */}
      <Route path='/*'
        render={h => <NoMatch
          {...h} 
        />} 
      />
    </Switch>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cartItems,
    showCart: state.showCart,
    headerLink: state.headerLink,
    device: state.device
  }
}

export default connect(mapStateToProps)(ViewRouter)