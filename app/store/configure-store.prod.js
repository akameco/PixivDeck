// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'
import reducer from 'reducers'
import mySaga from '../sagas'
import storeWrapper from './wrapper'

export default function configureStore(initialState: ?Object) {
  const sagaMiddleware = createSagaMiddleware()

  const enhancer = compose(applyMiddleware(sagaMiddleware), autoRehydrate())

  const store = createStore(reducer, initialState, enhancer)
  storeWrapper(store)

  persistStore(store, {
    storage: localForage,
    whitelist: [
      'columns',
      'Table',
      'Language',
      'LoginModal',
      'ModalManeger',
      'SettingModal',
    ],
  })

  sagaMiddleware.run(mySaga)

  return store
}
