import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ViewRouter from './ViewRouter'
import { Header } from './components'
import { MEASURE_DEVICE } from './redux/actionTypes'

const App = props => {
  const { measureDevice, history } = props
  window.onresize = measureDevice

  useEffect(() => {
    window.scrollTo(0,0)
  }, [history.location])
  
  return (
    <Router history={history}>
      <Route path='/:filter?'>
        <Header />
        <ViewRouter />
      </Route>
    </Router>
  )
}

const mapStateToProps = state => ({
  cart: state.cartItems,
  showCart: state.showCart,
  headerLink: state.headerLink,
  device: state.device
})

const mapDispatchToProps = dispatch => ({
  measureDevice: () => dispatch({
    type: MEASURE_DEVICE,
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)