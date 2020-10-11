import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import rootReducer from './redux/reducers'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import './css/index.css'

const history = createBrowserHistory()
const middleware = applyMiddleware(routerMiddleware(history))
const reducers = combineReducers({
  rootReducer,
  routing: routerReducer
})
const store = createStore(
  reducers,
  middleware
)

console.log(store.getState())

render(
  <Provider store={store}>
    <Root history={history} />
  </Provider>, document.getElementById('root')
)

// service workers docs: https://bit.ly/CRA-PWA
serviceWorker.unregister()