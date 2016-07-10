// @flow
import {merge} from 'lodash';
import type {Action} from 'redux';
import type {WorkType, UserType} from '../actions/type';

type State = {
	works: {[key: number]: WorkType},
	users: {[key: number]: UserType}
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
