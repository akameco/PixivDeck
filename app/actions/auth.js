// @flow
import type {Action, Dispatch} from '../types';
import Auth from '../repo/Auth';

export function login(
	name: string,
	password: string
): (dispatch: Dispatch) => void {
	return dispatch => {
		dispatch({type: 'START_LOADING'});
		Auth.login(name, password);
	};
}

export function logout(): (dispatch: Dispatch) => Action {
	return dispatch => {
		dispatch({type: 'START_LOADING'});
		Auth.logout();
		return dispatch({type: 'LOGOUT'});
	};
}
