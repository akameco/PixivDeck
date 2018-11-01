// @flow
import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store'
import Root from './containers/Root'
import './styles/global-styles' // eslint-disable-line import/no-unassigned-import

const store = configureStore()

const rootEl = document.getElementById('root')

if (rootEl) {
  render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    rootEl
  )
}

if (rootEl && module.hot) {
  module.hot.accept('./containers/Root', () => {
    // $FlowFixMe
    const NextRoot = require('./containers/Root') // eslint-disable-line global-require
    render(
      <AppContainer>
        {/* // $FlowFixMe */}
        <NextRoot store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
