import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import App from './container/app';
import configureStore from './store';

const store = configureStore();

render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}/>
		</Router>
	</Provider>
), document.querySelector('.root'));
