import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import {save} from '../middleware/';
import startIpc from '../middleware/ipc';
import scroll from '../middleware/scroll';
import auth from '../middleware/auth';
import api from '../middleware/api';
import startKeyEvent from '../middleware/key-event';

export default function configureStore(initialState: Object) {
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
	startKeyEvent(store);
	return store;
}
