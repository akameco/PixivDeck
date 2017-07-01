// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from 'components/App'
import Language from 'containers/Language'
import configureStore from './store'

import { translationMessages } from './i18n'

import './global-styles' // eslint-disable-line

injectTapEventPlugin()

const store = configureStore()

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
