// @flow

export type History = Array<number>

export type HistoryAction =
	| {type: 'ADD_HISTORY', id: number}
;
