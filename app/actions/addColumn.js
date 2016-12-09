// @flow
import type {Dispatch} from '../types'
import Pixiv from '../util/pixiv'
import type {User} from '../types/user'
import * as endpoint from '../constants/endpoint'
import * as ranking from '../constants/ranking'
import {addColumn} from './column'

export const addBookmarkColumn = (isPublic: bool) => {
	return (dispatch: Dispatch) => {
		const userId = Pixiv.authInfo().user.id

		const restrict = isPublic ? 'public' : 'private'
		const title = isPublic ? '公開ブックマーク' : '非公開ブックマーク'
		const opts = {
			userId,
			restrict,
		}

		dispatch(addColumn(endpoint.BOOKMARKS_ILLUST, opts, title, 1000 * 60))
	}
}

export const addFollowColumn = (isPublic: bool) => {
	return (dispatch: Dispatch) => {
		const restrict = isPublic ? 'public' : 'private'
		const title = isPublic ? '新着 公開' : '新着 非公開'
		const opts = {
			restrict,
		}

		dispatch(addColumn(endpoint.FOLLOW, opts, title, 1000 * 60))
	}
}

export const addIllustRankingColumn = (mode: $Keys<typeof ranking.ILLUST_RANKING>) =>
	(dispatch: Dispatch) => {
		dispatch(addColumn(endpoint.RANKING, {mode}, `${ranking.ILLUST_RANKING[mode]}ランキング`, 1000 * 60))
	}

export const addIllustR18RankingColumn = (mode: $Keys<typeof ranking.ILLUST_R18_RANKING>) =>
	(dispatch: Dispatch) => {
		dispatch(addColumn(endpoint.RANKING, {mode}, `${ranking.ILLUST_R18_RANKING[mode]}ランキング`, 1000 * 60))
	}

export const addSearchIllustColumn = (word: string) => {
	return (dispatch: Dispatch) => {
		dispatch(addColumn(endpoint.SEARCH, {word}, word, 1000 * 60))
	}
}

export const addUserIllusts = ({id, name, account}: User) => {
	return (dispatch: Dispatch) => {
		dispatch(addColumn(endpoint.USER_ILLUSTS, {userId: id}, `${name}(${account})`, 1000 * 60 * 60))
	}
}
