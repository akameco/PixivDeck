// @flow
import type {Action, Auth} from '../types'

const initState = {
	username: '',
	password: '',
	isLoginFailure: false,
	isLoading: false,
}

export default function auth(state: Auth = initState, action: Action): Auth {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return {...state, isLoading: true}
		case 'LOGIN_SUCCESS':
			return {username: action.username, password: action.password, isLoginFailure: false, isLoading: false}
		case 'LOGIN_FAILURE':
			return {...state, isLoginFailure: true, isLoading: false}
		default:
			return state
	}
}
