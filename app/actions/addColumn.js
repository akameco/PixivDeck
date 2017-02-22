// @flow
import type {Action} from 'types'
import type {User} from 'types/user'
import * as ranking from 'constants/ranking'
import * as Actions from 'constants/addColumn'

export const addBookmarkColumn = (isPublic: bool): Action => ({
	type: Actions.ADD_COLUMN_BOOKMARK,
	isPublic,
})

export const addFollowColumn = (isPublic: bool): Action => ({
	type: Actions.ADD_COLUMN_FOLLOW,
	isPublic,
})

export const addIllustRankingColumn = (mode: $Keys<typeof ranking.ILLUST_RANKING>): Action => ({
	type: Actions.ADD_COLUMN_RANKING,
	mode,
})

export const addIllustR18RankingColumn = (mode: $Keys<typeof ranking.ILLUST_R18_RANKING>): Action => ({
	type: Actions.ADD_COLUMN_R18_RANKING,
	mode,
})

export const addSearchIllustColumn = (word: string): Action => ({
	type: Actions.ADD_COLUMN_SEARCH_ILLUST,
	word,
})

export const addUserIllusts = ({id, name, account}: User): Action => ({
	type: Actions.ADD_COLUMN_USER_ILLUSTS,
	userId: id,
	name,
	account,
})
