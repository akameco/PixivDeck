// @flow
import union from 'lodash.union'
import type {Action} from '../types'
import type {History} from '../types/history'

export default function (state: History = [], action: Action): History {
	switch (action.type) {
		case 'ADD_HISTORY':
			return union([action.id], state)
		default:
			return state
	}
}
