import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from 'reducers'
import mySaga from '../sagas'
import storeWrapper from './wrapper'

export default function configureStore(initialState: Object) {
	const sagaMiddleware = createSagaMiddleware()

	const enhancer = compose(applyMiddleware(sagaMiddleware))

	const store = createStore(reducer, initialState, enhancer)
	storeWrapper(store)

	sagaMiddleware.run(mySaga)

	return store
}
