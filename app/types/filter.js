// @flow
export type Filter = {
	tags: Array<string>
};

export type FilterAction =
	| {type: 'ADD_TAG_FILTER', tag: string}
	| {type: 'REMOVE_TAG_FILTER', tag: string}
;
