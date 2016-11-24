import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import middlewares from '../middlewares';
import storeWrapper from '../store-wrapper';

export default function configureStore(initialState: Object) {
	const enhancer = compose(
		applyMiddleware(
			thunk,
			...middlewares
		)
	);

	const store = createStore(reducer, initialState, enhancer);
	storeWrapper(store);

	return store;
}
