import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import reducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
	const logger = createLogger();
	const sagaMiddleware = createSagaMiddleware();

	const router = routerMiddleware(hashHistory);

	const enhancer = compose(
		applyMiddleware(sagaMiddleware, router, logger),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const store = createStore(reducer, enhancer);

	sagaMiddleware.run(rootSaga);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
