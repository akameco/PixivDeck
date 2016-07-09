import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import startIpc from '../middleware/ipc';
import rankingMiddleware from '../middleware/ranking';
import scroll from '../middleware/scroll';

export default function configureStore() {
	const logger = createLogger();

	const enhancer = compose(
		applyMiddleware(thunk,
			rankingMiddleware,
			scroll,
			logger
		), window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const store = createStore(reducer, enhancer);
	startIpc(store);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;

			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
