// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import {
	addBookmarkColumn,
	addFollowColumn,
	addIllustRankingColumn,
	addIllustR18RankingColumn,
} from '../../actions'
import * as ranking from '../../constants/ranking'
import Modal from './AddColumnModal'

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
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
	}
}

export default connect(undefined, mapDispatchToProps)(Modal)
