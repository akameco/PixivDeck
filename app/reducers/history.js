// @flow
import union from 'lodash.union';
import type {Action, History} from '../types';

export default function (state: History = [], action: Action): History {
	switch (action.type) {
		case 'ADD_HISTORY':
			return union([action.id], state);
		default:
			return state;
	}
}
