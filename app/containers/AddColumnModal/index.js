// @flow
import { connect, type Connector } from 'react-redux'
// import type { Connector } from 'react-redux'
import type { Dispatch } from 'types'
import { addBookmarkColumn, addFollowColumn } from 'actions'
import { addRankingColumn } from 'containers/ColumnRanking/actions'
import type { Mode } from 'containers/ColumnRanking/reducer'
import { addRankingR18Column } from 'containers/ColumnRankingR18/actions'
import type { R18Mode } from 'containers/ColumnRankingR18/reducer'
import Modal from './AddColumnModal'
import type { Props } from './AddColumnModal'

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
  addIllustRanking(mode: Mode) {
    dispatch(addRankingColumn(mode))
  },
  addIllustR18Ranking(mode: R18Mode) {
    dispatch(addRankingR18Column(mode))
  },
})

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps)

export default connector(Modal)
