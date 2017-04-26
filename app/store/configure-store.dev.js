import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import reducer from 'reducers'
import mySaga from '../sagas'
import storeWrapper from './wrapper'

export default function configureStore(initialState: Object) {
  const middleware = []

  const logger = createLogger({
    level: 'info',
    collapsed: true,
  })

  middleware.push(logger)

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const enhancer = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(reducer, initialState, enhancer)
  storeWrapper(store)

  sagaMiddleware.run(mySaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
