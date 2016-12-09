// @flow
import type {ColumnType as Column} from '../types/column'
import * as endpoint from '../constants/endpoint'

const hour = 1000 * 60 * 60

const initState: Array<Column> = [
	{
		id: 1,
		endpoint: endpoint.RANKING,
		timer: hour,
		title: 'デイリーランキング',
		params: {
			mode: 'day',
			offset: 0,
		},
		ids: [],
	},
	{
		id: 2,
		endpoint: endpoint.RANKING,
		timer: hour,
		title: 'ウィークリーランキング',
		params: {
			mode: 'week',
			offset: 0,
		},
		ids: [],
	},
	{
		id: 3,
		endpoint: endpoint.RANKING,
		timer: hour,
		title: 'マンスリーランキング',
		params: {
			mode: 'month',
			offset: 0,
		},
		ids: [],
	},
]

export default initState
