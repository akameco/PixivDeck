// @flow
import type {ColumnType as Column} from '../types/column'

const hour = 1000 * 60 * 60

const initState: Array<Column> = [
	{
		id: 1,
		endpoint: 'illustRanking',
		timer: hour,
		title: 'デイリーランキング',
		query: {
			opts: {
				mode: 'day',
				offset: 0,
			},
		},
		ids: [],
	},
	{
		id: 2,
		endpoint: 'illustRanking',
		timer: hour,
		title: 'ウィークリーランキング',
		query: {
			opts: {
				mode: 'week',
				offset: 0,
			},
		},
		ids: [],
	},
	{
		id: 3,
		endpoint: 'illustRanking',
		timer: hour,
		title: 'マンスリーランキング',
		query: {
			opts: {
				mode: 'month',
				offset: 0,
			},
		},
		ids: [],
	},
]

export default initState
