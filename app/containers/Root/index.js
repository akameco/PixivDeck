// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from 'containers/App'
import Language from 'containers/Language'
import type { Store } from 'types'
import { GlobalStyle } from '../../styles/global-styles'
import { translationMessages } from '../../i18n'

type Props = {
  store: Store,
  persistor: any,
}

function Root({ store, persistor }: Props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Language messages={translationMessages}>
          <MuiThemeProvider>
            <React.Fragment>
              <App />
              <GlobalStyle />
            </React.Fragment>
          </MuiThemeProvider>
        </Language>
      </PersistGate>
    </Provider>
  )
}

export default Root
