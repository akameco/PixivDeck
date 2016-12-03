// @flow
import type {User, Action, Dispatch, Profile, State} from '../types'
import Pixiv, {normalizeIllusts} from '../util/pixiv'
import {apiRequestSuccess} from './api'

export const openUserDrawer = (id: number): Action => ({type: 'OPEN_DRAWER', id})

const addDrawerIllusts = (ids: number[]): Action => ({type: 'DRAWER_ADD_ILLUSTS', ids})
const addDrawerMangas = (ids: number[]): Action => ({type: 'DRAWER_ADD_MANGAS', ids})

const setNextIllustUrl = (url: string): Action => ({type: 'DRAWER_SET_NEXT_ILLUST_URL', url})
const setNextMangaUrl = (url: string): Action => ({type: 'DRAWER_SET_NEXT_MANGA_URL', url})

type UserIllust = | 'illust' | 'manga';
const setNextUrl = (url: string, type: UserIllust) => {
	return (dispatch: Dispatch) => {
		if (type === 'manga') {
			dispatch(setNextMangaUrl(url))
		}
		dispatch(setNextIllustUrl(url))
	}
}

const fetchDrawerData = (data: Object, type: UserIllust) => {
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

export const fetchDrawerIllust = (id: number) => {
	return async (dispatch: Dispatch): Promise<void> => {
		const type = 'illust'
		const data = await Pixiv.userIllusts(id, {type})
		const {result} = await dispatch(fetchDrawerData(data, type))
		dispatch(addDrawerIllusts(result))
	}
}

export const fetchDrawerManga = (id: number) => {
	return async (dispatch: Dispatch): Promise<void> => {
		const type = 'manga'
		const data = await Pixiv.userIllusts(id, {type})
		const {result} = await dispatch(fetchDrawerData(data, type))
		dispatch(addDrawerMangas(result))
	}
}

export const nextDrawerPage = (type: UserIllust) => {
	return async (dispatch: Dispatch, getState: () => State): Promise<void> => {
		const {drawer: {nextIllustUrl}} = getState()
		if (nextIllustUrl) {
			const data = await Pixiv.fetch(nextIllustUrl)
			await dispatch(fetchDrawerData(data, type))
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
