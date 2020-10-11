import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const Root = ({ history }) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root