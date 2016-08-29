// @flow
import type {Action, Dispatch} from '../types';
import {addHistory} from '../actions';

export default () => (next: Dispatch) => (action: Action) => {
	next(action);
	if (action.type === 'SELECT_WORK') {
		return next(addHistory(action.id));
	}
};
