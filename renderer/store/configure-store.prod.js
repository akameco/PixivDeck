import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import middlewares from '../middlewares';
import storeWrapper from '../store-wrapper';

export default function configureStore(initialState: Object) {
	const enhancer = compose(
		applyMiddleware(
			...middlewares
		)
	);

	const store = createStore(reducer, initialState, enhancer);
	storeWrapper(store);

	return store;
}
