// @flow
export type Filter = {
	r18: bool,
	tags: Array<string>
};

export type FilterAction =
	| {type: 'ADD_TAG_FILTER', tag: string}
	| {type: 'REMOVE_TAG_FILTER', tag: string}
	| {type: 'SET_R18', show: bool}
;
