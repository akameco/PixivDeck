// @flow
import union from 'lodash.union';
import type {Action, Filter} from '../types';

const initialState: Filter = {
	r18: false,
	tags: []
};

export default function (state: Filter = initialState, action: Action): $Shape<Filter> {
	switch (action.type) {
		case 'ADD_TAG_FILTER':
			return {...state, tags: union([...state.tags, action.tag])};
		case 'REMOVE_TAG_FILTER': {
			const tag = action.tag;
			return {...state, tags: state.tags.filter(t => tag !== t)};
		}
		case 'SET_R18':
			return {...state, r18: action.show};
		default:
			return state;
	}
}
