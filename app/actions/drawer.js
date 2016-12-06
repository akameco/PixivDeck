// @flow
import type {Action, Dispatch, State} from '../types'
import type {User, Profile} from '../types/user'
import type {DrawerType} from '../types/drawer'
import Pixiv, {normalizeIllusts} from '../util/pixiv'
import {getNextUrl} from '../reducers/drawer'
import {apiRequestSuccess} from './api'

export const openUserDrawer = (id: number): Action => ({type: 'OPEN_DRAWER', id})

const addDrawerIllusts = (ids: number[], drawerType: DrawerType): Action => (
	{type: 'DRAWER_ADD_ILLUSTS', ids, drawerType}
)

const setNextUrl = (url: string, drawerType: DrawerType): Action => (
	{type: 'DRAWER_SET_NEXT_URL', url, drawerType}
)

const addDrawerUser = (user: User): Action => ({type: 'DRAWER_ADD_USER', user})
const addDrawerProfile = (profile: Profile): Action => ({type: 'DRAWER_ADD_PROFILE', profile})

const fetchDrawerData = (data: Object, type: DrawerType) => {
	return async (dispatch: Dispatch): Promise<Object> => {
		const response = normalizeIllusts(data)
		dispatch(apiRequestSuccess(response))
		const {nextUrl} = data
		if (nextUrl) {
			dispatch(setNextUrl(nextUrl, type))
		}
		return response
	}
}

export const fetchDrawerIllust = (id: number, type: DrawerType) => {
	return async (dispatch: Dispatch): Promise<void> => {
		const data = await Pixiv.userIllusts(id, {type})
		const {result} = await dispatch(fetchDrawerData(data, type))
		dispatch(addDrawerIllusts(result, type))
	}
}

export const nextDrawerPage = (type: DrawerType) => {
	return async (dispatch: Dispatch, getState: () => State): Promise<void> => {
		const nextUrl = getNextUrl(type, getState())
		if (nextUrl) {
			const data = await Pixiv.fetch(nextUrl)
			const {result} = await dispatch(fetchDrawerData(data, type))
			dispatch(addDrawerIllusts(result, type))
		}
	}
}

export const fetchUserDetail = (id: number) => {
	return async (dispatch: Dispatch) => {
		const {user, profile} = await Pixiv.userDetail(id)
		dispatch(addDrawerUser(user))
		dispatch(addDrawerProfile(profile))
	}
}

export const follow = (id: number) => {
	return async (dispatch: Dispatch) => {
		await Pixiv.userFollowAdd(id)
		dispatch(fetchUserDetail(id))
	}
}

export const unFollow = (id: number) => {
	return async (dispatch: Dispatch) => {
		await Pixiv.userFollowDelete(id)
		dispatch(fetchUserDetail(id))
	}
}
