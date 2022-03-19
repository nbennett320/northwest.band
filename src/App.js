import React from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ViewRouter from './ViewRouter'
import { Header, Footer } from './components'
import { MEASURE_DEVICE } from './redux/actionTypes'

const App = props => {
  const { 
    measureDevice, 
    history, 
    location, 
    device
  } = props
  const hasShownPanel = sessionStorage.getItem("hasShownPanel")
  if(hasShownPanel === "false") {
    props.setDestination({from: props.match.path})
    props.history.push('/blm')
  }

  window.addEventListener('resize', () => {
    measureDevice()
  })

  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [history])
  
  return (
    <Router history={history}>
      <Route path='/:filter?'>
        <Header />
        <ViewRouter 
          location={location} 
          device={device}
        />
        <Footer 
          location={location}
          device={device}
        />
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