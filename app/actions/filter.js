// @flow
import type {Action} from '../types'

export const addTagFilter = (tag: string): Action => (
	{type: 'ADD_TAG_FILTER', tag}
)

export const removeTagFilter = (tag: string): Action => (
	{type: 'REMOVE_TAG_FILTER', tag}
)
