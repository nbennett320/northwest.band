import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Main from './Main'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Main />, document.getElementById('root'))

// service workers docs: https://bit.ly/CRA-PWA
serviceWorker.unregister()
