// @flow
import union from 'lodash.union'
import type {Action} from 'types'
import type {Filter} from 'types/filter'

const initialState: Filter = {
	tags: [],
}

export default function (state: Filter = initialState, action: Action): $Shape<Filter> {
	switch (action.type) {
		case 'ADD_TAG_FILTER':
			return {...state, tags: union([...state.tags, action.tag])}
		case 'REMOVE_TAG_FILTER': {
			const tag = action.tag
			return {...state, tags: state.tags.filter(t => tag !== t)}
		}
		default:
			return state
	}
}
