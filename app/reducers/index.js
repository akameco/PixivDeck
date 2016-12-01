// @flow
import {combineReducers} from 'redux'
import type {State, User} from '../types'
import manage from './manage'
import columns from './columns'
import entities from './entities'
import history from './history'
import filter from './filter'
import auth from './auth'
import config from './config'
import illustById, * as fromIllustById from './illustById'
import drawer from './drawer'

const rootReducer = combineReducers({
	manage,
	entities,
	columns,
	history,
	filter,
	auth,
	config,
	illustById,
	drawer,
})

export const getColumn = ({columns}: State, id: number) =>
	columns.filter(c => c.id === id)[0]

export const filterByTag = ({illustById, filter}: State, id: number) => {
	const illust = fromIllustById.getIllust(illustById, id)
	const isShow = illust.tags.every(t =>
		filter.tags.every(tag => tag !== t)
	)
	return isShow ? illust : null
}

export const getIllusts = (state: State, columnId: number) => {
	const column = state.columns.filter(c => c.id === columnId)[0]
	return column.ids.map(id => fromIllustById.getIllust(state.illustById, id))
	// return column.ids.map(id => filterByTag(state, id))
}

export const getDrawerIllusts = (state: State) =>
	state.drawer.illusts.map(id => fromIllustById.getIllust(state.illustById, id))

export const getDrawerMangas = (state: State) =>
	state.drawer.mangas.map(id => fromIllustById.getIllust(state.illustById, id))

export const getUser = (state: State, userId: number): User =>
	state.entities.users[userId]

export const getCurrentUser = (state: State): ?User => {
	if (state.manage.userId) {
		return state.entities.users[state.manage.userId]
	}
}

export default rootReducer
