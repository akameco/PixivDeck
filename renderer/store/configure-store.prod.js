import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import startIpc from '../middleware/ipc';
import scroll from '../middleware/scroll';
import auth from '../middleware/auth';
import api from '../middleware/api';

export default function configureStore() {
	const enhancer = compose(
		applyMiddleware(
			thunk,
			auth,
			api,
			scroll
		)
	);
	const store = createStore(reducer, enhancer);
	startIpc(store);
	return store;
}
