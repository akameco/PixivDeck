import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import reducer from '../reducers';
import startIpc from '../middleware/ipc';

export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();

	const router = routerMiddleware(hashHistory);
	const enhancer = compose(applyMiddleware(thunk, sagaMiddleware, router));
	const store = createStore(reducer, enhancer);
	startIpc(store);
	return store;
}
