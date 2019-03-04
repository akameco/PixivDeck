// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'
import type { Store } from 'types'
import reducer from './reducer'
import mySaga from './sagas'

import { version } from './package.json' // eslint-disable-line import/extensions

let persistor

const persistConfig = {
  key: `root`,
  version: version.split('.')[0],
  storage: localForage,
  debug: process.env.NODE_ENV === 'develop',
  whitelist: [
    'ColumnManager',
    'Language',
    'LoginModal',
    'ModalManeger',
    'SettingModal',
    'Table',
  ],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default function configureStore(
  initialState: Object = {}
): { store: Store, persistor: any } {
  const middleware = []

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const enhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  const store = createStore(persistedReducer, initialState, enhancer)

  sagaMiddleware.run(mySaga)

  persistor = persistStore(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer') // eslint-disable-line global-require

      // $FlowFixMe
      store.replaceReducer(nextRootReducer)
    })
  }

  return { store, persistor }
}

export function clean() {
  if (persistor) {
    persistor.purge()
  }
}
