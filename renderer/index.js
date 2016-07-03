import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import configureStore from './store';
import App from './container/app';
import RankingPage from './container/ranking-page';

const store = configureStore();

const routes = (
	<Route path="/" component={App}>
		<Route path="ranking/:mode" component={RankingPage}/>
	</Route>
);

render((
	<Provider store={store}>
		<Router history={hashHistory} routes={routes}/>
	</Provider>
), document.querySelector('.root'));
