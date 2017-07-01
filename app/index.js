// @flow
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import type { Store } from 'types'
import configureStore from './store'
import Root from './containers/Root'

import './styles/global-styles' // eslint-disable-line

const store: Store = configureStore()
const rootEl = document.getElementById('root')

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // $FlowFixMe
    const NextRoot = require('./containers/Root')
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
