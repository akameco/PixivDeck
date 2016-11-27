// @flow
import merge from 'lodash.merge';
import type {Action, Entities} from '../types';

const initialState: Entities = {
	illusts: {},
	users: {}
};

export default function (state: Entities = initialState, action: Action): Entities {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	return state;
}
