// @flow
import {combineReducers} from 'redux'
import type {State} from '../types'
import manage from './manage'
import columns from './columns'
import entities from './entities'
import history from './history'
import filter from './filter'
import auth from './auth'
import config from './config'
import illustById, * as fromIllustById from './illustById'

const rootReducer = combineReducers({
	manage,
	entities,
	columns,
	history,
	filter,
	auth,
	config,
	illustById,
})

export const getIllusts = (state: State, columnId: number) => {
	const column = state.columns.filter(c => c.id === columnId)[0]
	return column.ids.map(id => fromIllustById.getIllust(state.illustById, id))
}

export default rootReducer
