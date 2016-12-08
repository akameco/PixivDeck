import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import type {State} from './types'
import configureStore from './store'
import App from './components'
import Pixiv from './util/pixiv'
import './app.global.css'; // eslint-disable-line

injectTapEventPlugin()

async function init() {
	const storage: State = localStorage.getItem('store')
	let initialState: State = storage ? JSON.parse(storage) : {}

	const {auth, manage, columns} = initialState

	if (auth && manage) {
		const {username, password} = auth
		const {isLogin} = manage
		if (username && password && isLogin) {
			await Pixiv.login(username, password)
		}
	} else if (columns) {
		initialState = {columns: initialState.columns}
	}

	const store = configureStore(initialState)

	render((
		<Provider store={store}>
			<MuiThemeProvider>
				<App/>
			</MuiThemeProvider>
		</Provider>
	), document.querySelector('#root'))
}

init()
