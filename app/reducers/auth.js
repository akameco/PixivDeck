// @flow
import type {Action, Auth} from '../types';

const initState = {
	username: '',
	password: ''
};

export default function auth(state: Auth = initState, action: Action): Auth {
	switch (action.type) {
		case 'LOGIN': {
			const {username, password} = action;
			return {username, password};
		}
		default:
			return state;
	}
}
