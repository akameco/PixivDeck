import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store'
import Root from './containers/Root'

const { store, persistor } = configureStore()
const rootEl = document.querySelector('#root')

if (rootEl) {
  render(
    <AppContainer>
      <Root store={store} persistor={persistor} />
    </AppContainer>,
    rootEl
  )
}

if (rootEl && module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root')

    render(
      <AppContainer>
        <NextRoot store={store} persistor={persistor} />
      </AppContainer>,
      rootEl
    )
  })
}
