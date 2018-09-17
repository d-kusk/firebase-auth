import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import AppContainer from './containers/AppContainer'

const store = applyMiddleware()(createStore)(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
