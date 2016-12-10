// @flow
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {Dispatch} from '../../types'
import {
	addBookmarkColumn,
	addFollowColumn,
	addIllustRankingColumn,
	addIllustR18RankingColumn,
} from '../../actions'
import * as ranking from '../../constants/ranking'
import Modal from './AddColumnModal'
import type {Props} from './AddColumnModal'

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addBookmark() {
		dispatch(addBookmarkColumn(true))
	},
	addBookmarkPrivate() {
		dispatch(addBookmarkColumn(false))
	},
	addFollow() {
		dispatch(addFollowColumn(true))
	},
	addFollowPrivate() {
		dispatch(addFollowColumn(false))
	},
	addIllustRanking(mode: $Keys<typeof ranking.ILLUST_RANKING>) {
		dispatch(addIllustRankingColumn(mode))
	},
	addIllustR18Ranking(mode: $Keys<typeof ranking.ILLUST_R18_RANKING>) {
		dispatch(addIllustR18RankingColumn(mode))
	},
})

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps)

export default connector(Modal)
