// @flow
import Pixiv from '../util/pixiv'
import {refreshAllColumns} from './column'

export const addBookmark = (id: number, isPublic?: bool = true) => {
	return async (dispatch: Dispatch): Promise<void> => {
		const restrict = isPublic ? 'public' : 'private'
		await Pixiv.illustBookmarkAdd(id, {restrict})
		await dispatch(refreshAllColumns())
	}
}
