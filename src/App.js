import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ViewRouter from './Router'
import { Header } from './components'

// query device size
const mql = window.matchMedia(`(max-width: 633px)`)
const vpWidth = window.innerWidth
const vpHeight = window.innerHeight
const device = {
  vpWidth,
  vpHeight,
  isMobile: mql.matches
}

const ScrollToTop = props => {
  console.log(props)
  useEffect(() => {
    window.scrollTo(0,0)
  }, [props.location])
  return withRouter(props.children)
}

const App = props => {
  return (
    <div>
      <Header 
        cart={props.cart}
        showCart={props.showCart}
        headerLink={props.headerLink}
      />
      <ViewRouter 
        {...props}
        device={device}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cartItems,
  showCart: state.showCart,
  headerLink: state.headerLink,
})

export default connect(mapStateToProps)(App)