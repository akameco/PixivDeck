// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'
import type { Store } from 'types'
import reducer from './reducer'
import mySaga from './sagas'

const whitelist = [
  'Table',
  'ColumnManager',
  'ColumnRanking',
  'ColumnRankingR18',
  'ColumnBookmark',
  'ColumnFollow',
  'ColumnUserIllust',
  'ColumnSearch',
  'Language',
  'LoginModal',
  'ModalManeger',
  'SettingModal',
]

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
    whitelist,
  })

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')

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
