// @flow
export type Query = {
	type: 'search' | 'ranking' | 'favoriteWorks',
	q?: string,
	opts: {
		mode?: string,
		publicity?: 'public' | 'private',
		page: number
	}
};

export type ColumnAction =
{
	type: 'RECEIVE_WORKS',
	id: number,
	works?: Array<number>
} | {
	type: 'ADD_COLUMN',
	id: number,
	title: string,
	query: Query
} | {
	type: 'NEXT_PAGE',
	id: number
} | {
	type: 'CLOSE_COLUMN',
	id: number
}
;
