// @flow
import Pixiv from '../repo/pixiv';
import type {Action, Dispatch, State} from '../types';
import {initColumnOrder} from './column';

export function init() {
	return async (dispatch: Dispatch, getState: () => State): Promise<Action> => {
		try {
			const {username, password} = getState().auth;
			if (username && password) {
				await dispatch(login(username, password));
			} else {
				dispatch(logout());
			}
		} catch (err) { }
		return dispatch({type: 'INIT'});
	};
}

export function login(
	username: string,
	password: string
): (dispatch: Dispatch, getState: () => State) => Promise<void> {
	return async (dispatch, getState) => {
		try {
			await Pixiv.login(username, password);
			dispatch({type: 'LOGIN_SUCCESS'});
			dispatch({type: 'LOGIN', username, password});

			const columns = getState().columns;
			await initColumnOrder(dispatch, columns);
		} catch (err) {
			dispatch({type: 'LOGIN_FAILED'});
		}
	};
}

export function logout(): Action {
	return {type: 'LOGOUT'};
}
