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
} | {
	type: 'CLOSE_COLUMN',
	id: number
}
;

export function nextPage(id: number): Action {
	return {
		type: 'NEXT_PAGE',
		id
	};
}

type query = {
	type: string,
	opts: {
		mode?: string,
		publicity?: 'public' | 'private',
		page: number
	}
}

export function addColumn(query: query, title: string = ''): Action {
	const id = Date.now();
	return {
		type: 'ADD_COLUMN',
		id,
		title,
		query
	};
}

export function closeColumn(id: number): Action {
	return {
		type: 'CLOSE_COLUMN',
		id
	};
}
