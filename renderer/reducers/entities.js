// @flow
import {merge} from 'lodash';
import type {Action, Entities} from '../actions/type';

const initialState = {
	works: {},
	users: {}
};

export default function (state: Entities = initialState, action: Action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	return state;
}
