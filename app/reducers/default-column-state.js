// @flow
import type {ColumnType as Column} from 'types/column'
import * as endpoint from 'constants/endpoint'
import {HOUR} from 'constants/time'

const commonState = {
	endpoint: endpoint.RANKING,
	timer: HOUR,
	ids: [],
	minBookmarks: 0,
}

const initState: Array<Column> = [
	{
		id: 1,
		title: 'デイリーランキング',
		params: {mode: 'day', offset: 0},
		...commonState,
	},
	{
		id: 2,
		title: 'ウィークリーランキング',
		params: {mode: 'week', offset: 0},
		...commonState,
	},
	{
		id: 3,
		title: 'マンスリーランキング',
		params: {mode: 'month', offset: 0},
		...commonState,
	},
]

export default initState
