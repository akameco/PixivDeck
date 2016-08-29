import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import middlewares from '../middlewares';
import storeWrapper from '../store-wrapper';

export default function configureStore(initialState: Object) {
	const logger = createLogger({
		collapsed: () => true
	});

	const enhancer = compose(
		applyMiddleware(
			...middlewares,
			logger
		), window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const store = createStore(reducer, initialState, enhancer);
	storeWrapper(store);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;

			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
