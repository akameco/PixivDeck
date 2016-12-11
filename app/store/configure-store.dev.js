import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers'
import mySaga from '../sagas'
import middlewares from '../middlewares'
import storeWrapper from './wrapper'

export default function configureStore(initialState: Object) {
	const logger = createLogger({
		collapsed: () => true,
	})

	const sagaMiddleware = createSagaMiddleware()

	const enhancer = compose(
		applyMiddleware(
			thunk,
			...middlewares,
			sagaMiddleware,
			logger
		), window.devToolsExtension ? window.devToolsExtension() : f => f
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
