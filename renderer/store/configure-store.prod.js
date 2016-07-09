import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import startIpc from '../middleware/ipc';
import rankingMiddleware from '../middleware/ranking';
import scroll from '../middleware/scroll';

export default function configureStore() {
	const enhancer = compose(
		applyMiddleware(
			thunk,
			rankingMiddleware,
			scroll
		)
	);
	const store = createStore(reducer, enhancer);
	startIpc(store);
	return store;
}
