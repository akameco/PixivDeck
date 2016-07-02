import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(reducer,
		compose(applyMiddleware(sagaMiddleware))
	);

	sagaMiddleware.run(rootSaga);
	return store;
}
