import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Reset } from 'styled-reset'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './Components/App'
import { Store } from './Redux/Stores/Store'

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      {' '}
      <Reset />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
