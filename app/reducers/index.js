// @flow
import {combineReducers} from 'redux'
import type {State} from '../types'
import type {User} from '../types/user'
import manage from './manage'
import columns from './columns'
import filter from './filter'
import auth from './auth'
import config from './config'
import illustById, * as fromIllustById from './illustById'
import userById, * as fromUserById from './userById'
import drawer from './drawer'

const rootReducer = combineReducers({
	manage,
	columns,
	filter,
	auth,
	config,
	illustById,
	userById,
	drawer,
})

export const getColumn = ({columns}: State, id: number) =>
	columns.filter(c => c.id === id)[0]

export const filterByTags = ({illustById, filter: {tags}}: State, id: number) => {
	const illust = fromIllustById.getIllust(illustById, id)
	const isShow = illust.tags.every(t => tags.every(tag => !t.name.includes(tag)))
	return isShow ? illust : null
}

export const getIllusts = (state: State, columnId: number) => {
	const column = state.columns.filter(c => c.id === columnId)[0]
	return column.ids.map(id => filterByTags(state, id)).filter(v => v)
}

export const getDrawerIllusts = (state: State) =>
	state.drawer.illusts.map(id => fromIllustById.getIllust(state.illustById, id))

export const getDrawerMangas = (state: State) =>
	state.drawer.mangas.map(id => fromIllustById.getIllust(state.illustById, id))

export const getUser = (state: State, userId: number): User =>
	fromUserById.getUser(state, userId)

export const getCurrentUser = (state: State): ?User => {
	if (state.manage.userId) {
		return state.userById[state.manage.userId]
	}
}

export default rootReducer
