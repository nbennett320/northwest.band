import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const Root = ({ history }) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

export default Root