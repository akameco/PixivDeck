// @flow
import type {Action} from '../types';

export function setR18(show: bool): Action {
	return {type: 'SET_R18', show};
}

export function addTagFilter(tag: string): Action {
	return {type: 'ADD_TAG_FILTER', tag};
}

export function removeTagFilter(tag: string): Action {
	return {type: 'REMOVE_TAG_FILTER', tag};
}
