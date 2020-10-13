import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { cartItems, headerLink } from './redux/reducers'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './css/index.css'
import './css/main.css'

const history = createBrowserHistory()
const middleware = applyMiddleware(routerMiddleware(history))
const reducers = combineReducers({
  cartItems,
  headerLink,
  routing: routerReducer
})
const store = createStore(
  reducers,
  middleware
)

console.log(store.getState())

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>, document.getElementById('root')
)

// service workers docs: https://bit.ly/CRA-PWA
serviceWorker.unregister()