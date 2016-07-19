import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './components';

const storage = localStorage.getItem('store');
const initialState = storage ? JSON.parse(storage) : {};

const store = configureStore(initialState);

if (process.env.WHY_DID_YOU_UPDATE === 'enable') {
	const {whyDidYouUpdate} = require('why-did-you-update');

	whyDidYouUpdate(React);
}

render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.querySelector('.root'));
