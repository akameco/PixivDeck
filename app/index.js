// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import type { State } from 'types'
import App from 'containers/App/'
import LanguageProvider from 'containers/LanguageProvider'
import configureStore from './store'
import Api from './api'

import { translationMessages } from './i18n'

import './global-styles' // eslint-disable-line

injectTapEventPlugin()

async function init() {
  const storage: ?string = localStorage.getItem('store')
  let initialState: $Shape<State> = storage ? JSON.parse(storage) : {}

  const { auth, columns } = initialState

  if (auth && auth.username && auth.password) {
    await Api.login(auth.username, auth.password)
  } else if (columns) {
    initialState = { columns: initialState.columns }
  }

  const store = configureStore(initialState)

  render(
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </LanguageProvider>
    </Provider>,
    document.querySelector('#root')
  )
}

init()
