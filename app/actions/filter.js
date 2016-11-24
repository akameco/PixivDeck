// @flow
import type {Action} from '../types';

export function addTagFilter(tag: string): Action {
	return {type: 'ADD_TAG_FILTER', tag};
}

export function removeTagFilter(tag: string): Action {
	return {type: 'REMOVE_TAG_FILTER', tag};
}
