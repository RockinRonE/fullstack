import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/globalStyle'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
)
