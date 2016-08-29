import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './components';
import './app.global.css';

const storage = localStorage.getItem('store');

const defaultState = {
	columns: [
		{
			id: 1,
			title: 'デイリーランキング',
			query: {
				type: 'ranking',
				opts: {
					mode: 'daily',
					page: 1
				}
			}
		},
		{
			id: 2,
			title: 'ウィークリーランキング',
			query: {
				type: 'ranking',
				opts: {
					mode: 'weekly',
					page: 1
				}
			}
		},
		{
			id: 3,
			title: 'マンスリーランキング',
			query: {
				type: 'ranking',
				opts: {
					mode: 'monthly',
					page: 1
				}
			}
		}
	]
};

const initialState = storage ? JSON.parse(storage) : defaultState;

const store = configureStore(initialState);

render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.querySelector('#root'));
