import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as reducers from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
	const reducer = combineReducers(reducers);
	const logger = createLogger();
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(reducer,
		compose(applyMiddleware(sagaMiddleware, logger))
	);

	sagaMiddleware.run(rootSaga);
	return store;
}
