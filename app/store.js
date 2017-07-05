// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'
import type { Store } from 'types'
import reducer from './reducer'
import mySaga from './sagas'
import { version } from './package.json'

let persistor

export default function configureStore(initialState: Object = {}): Store {
  const middleware = []

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const enhancer = compose(
    applyMiddleware(...middleware),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(reducer, initialState, enhancer)

  sagaMiddleware.run(mySaga)

  persistor = persistStore(store, {
    storage: localForage,
    blacklist: ['IllustById', 'UserById'],
    keyPrefix: `PixivDeck-v${version}`,
  })

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')

      // $FlowFixMe
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export function clean() {
  if (persistor) {
    persistor.purge()
  }
}
