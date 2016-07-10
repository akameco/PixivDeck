// @flow
import {merge} from 'lodash';
import type {Action} from 'redux';

type State = {
	works: Object,
	users: Object
}

const initialState: State = {
	works: {},
	users: {}
};

export default function (state: State = initialState, action: Action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	return state;
}
