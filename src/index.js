import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { cartItems, headerLink, device } from './redux/reducers'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './css/index.css'
import './css/main.css'

const history = createBrowserHistory()
const middleware = applyMiddleware(routerMiddleware(history))
const reducers = combineReducers({
  cartItems,
  headerLink,
  device,
  routing: routerReducer
})
const store = createStore(
  reducers,
  middleware
)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App history={history} />
    </ThemeProvider>
  </Provider>, document.getElementById('root')
)

// service workers docs: https://bit.ly/CRA-PWA
serviceWorker.unregister()