import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import {save} from '../middleware/';
import startIpc from '../middleware/ipc';
import scroll from '../middleware/scroll';
import auth from '../middleware/auth';
import api from '../middleware/api';

export default function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			auth,
			api,
			scroll,
			save
		)
	);
	const store = createStore(reducer, initialState, enhancer);
	startIpc(store);
	return store;
}
