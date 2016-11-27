// @flow
import Pixiv from '../repo/pixiv';
import type {Action, Dispatch, State} from '../types';
import {initColumnOrder} from './column';

export function init() {
	return async (
		dispatch: Dispatch,
		getState: () => State
	): Promise<void> | Action => {
		const {username, password} = getState().auth;
		if (username && password) {
			await dispatch(login(username, password));
		} else {
			dispatch(logout());
			dispatch({type: 'INIT'});
		}
	};
}

export function login(username: string, password: string): (
	dispatch: Dispatch,
	getState: () => State
) => Promise<Action> {
	return async (dispatch, getState) => {
		try {
			await Pixiv.login(username, password);
			dispatch({type: 'LOGIN_SUCCESS'});
			dispatch({type: 'SAVE_LOGIN_INFO', username, password});

			const columns = getState().columns;
			await initColumnOrder(dispatch, columns);
		} catch (err) {
			dispatch({type: 'LOGIN_FAILED'});
		}
		return dispatch({type: 'INIT'});
	};
}

export function logout(): Action {
	return {type: 'LOGOUT'};
}
