import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'
import { Store } from './types'
import reducer from './reducer'
import mySaga from './sagas'
import { version } from './package.json'

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
  initialState: object = {}
): { store: Store; persistor: any } {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  const enhancer = compose(
    applyMiddleware(...middleware),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  const store = createStore(persistedReducer, initialState, enhancer)
  sagaMiddleware.run(mySaga)
  persistor = persistStore(store)

  // @ts-ignore
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // @ts-ignore
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return {
    // @ts-ignore
    store,
    persistor,
  }
}

export function clean() {
  if (persistor) {
    persistor.purge()
  }
}
