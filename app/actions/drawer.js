// @flow
import type {User, Action, Dispatch, Profile} from '../types'
import Pixiv, {normalizeIllusts} from '../util/pixiv'
import {apiRequestSuccess} from './api'

export const openUserDrawer = (id: number): Action => ({type: 'OPEN_DRAWER', id})

const addDrawerIllusts = (ids: number[]): Action => ({type: 'DRAWER_ADD_ILLUSTS', ids})
const addDrawerMangas = (ids: number[]): Action => ({type: 'DRAWER_ADD_MANGAS', ids})

type UserIllust = | 'illust' | 'manga';
export const fetchDrawerIllust = (id: number, type: UserIllust = 'illust') => {
	return async (dispatch: Dispatch): Promise<void> => {
		const rawData = await Pixiv.userIllusts(id, {type})
		const response = normalizeIllusts(rawData)

		dispatch(apiRequestSuccess(response))
		const {nextUrl} = rawData
		if (nextUrl) {
			parseUrl(rawData.nextUrl)
		}

		if (type === 'illust') {
			dispatch(addDrawerIllusts(response.result))
		} else if (type === 'manga') {
			dispatch(addDrawerMangas(response.result))
		}
	}
}

const addDrawerUser = (user: User): Action => ({type: 'DRAWER_ADD_USER', user})
const addDrawerProfile = (profile: Profile): Action => ({type: 'DRAWER_ADD_PROFILE', profile})

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
