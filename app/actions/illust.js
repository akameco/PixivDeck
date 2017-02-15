// @flow
import type {Action} from 'types'
import * as Actions from 'constants/illust'

export const addBookmark = (id: number, isPublic: bool): Action => ({
	type: Actions.ADD_BOOKMARK,
	id,
	isPublic,
})
