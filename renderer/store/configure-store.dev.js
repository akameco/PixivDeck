import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import {save} from '../middleware/';
import startIpc from '../middleware/ipc';
import auth from '../middleware/auth';
import api from '../middleware/api';
import scroll from '../middleware/scroll';

export default function configureStore(initialState: Object) {
	const logger = createLogger({
		collapsed: () => true
	});

	const enhancer = compose(
		applyMiddleware(
			auth,
			api,
			scroll,
			save,
			logger
		), window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const store = createStore(reducer, initialState, enhancer);
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
