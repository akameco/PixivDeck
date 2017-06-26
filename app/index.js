// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import type { State } from 'types'
import App from 'components/App'
import Language from 'containers/Language'
import configureStore from './store'
import Api from './api'

import { translationMessages } from './i18n'

import './global-styles' // eslint-disable-line

injectTapEventPlugin()

async function init() {
  const store = configureStore()
  const { LoginModal }: State = store.getState()
  if (LoginModal && LoginModal.username && LoginModal.password) {
    await Api.login(LoginModal.username, LoginModal.password)
  }

  render(
    <Provider store={store}>
      <Language messages={translationMessages}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Language>
    </Provider>,
    document.querySelector('#root')
  )
}

init()
