// @flow
export type Action =
{
	type: 'RECEIVE_WORKS',
	id: number,
	works?: Array<number>
} | {
	type: 'ADD_COLUMN',
	id: number,
	title: string,
	query: {
		type: string,
		opts: Object
	}
} | {
	type: 'NEXT_PAGE',
	id: number
}
;

export function nextPage(id: number): Action {
	return {
		type: 'NEXT_PAGE',
		id
	};
}

export function addColumn(id: number, query: {type: string, opts: Object}, title: string = ''): Action {
	return {
		type: 'ADD_COLUMN',
		id,
		title,
		query
	};
}
