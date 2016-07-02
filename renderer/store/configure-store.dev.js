import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
	const logger = createLogger();
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(reducer,
		compose(
			applyMiddleware(sagaMiddleware, logger),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

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
