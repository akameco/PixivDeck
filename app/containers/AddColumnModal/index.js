// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import { addColumn as addRankingColumn } from 'containers/ColumnRanking/actions'
import { addColumn as addRankingR18Column } from 'containers/ColumnRankingR18/actions'
import { addColumn as addBookmarkColumn } from 'containers/ColumnBookmark/actions'
import { addColumn as addFollowColumn } from 'containers/ColumnFollow/actions'
import { addColumn as addRecommendedColumn } from 'containers/ColumnRecommended/actions'
import { addColumnHistory } from 'containers/ColumnHistory/actions'
import type { Mode } from 'containers/ColumnRanking/reducer'
import type { R18Mode } from 'containers/ColumnRankingR18/reducer'
import Modal from './AddColumnModal'
import type { Props } from './AddColumnModal'

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addRecommended() {
      dispatch(addRecommendedColumn('recommended'))
    },
    addHistory() {
      dispatch(addColumnHistory())
    },
    addBookmark() {
      dispatch(addBookmarkColumn('public'))
    },
    addBookmarkPrivate() {
      dispatch(addBookmarkColumn('private'))
    },
    addFollow() {
      dispatch(addFollowColumn('public'))
    },
    addFollowPrivate() {
      dispatch(addFollowColumn('private'))
    },
    addIllustRanking(mode: Mode) {
      dispatch(addRankingColumn(mode))
    },
    addIllustR18Ranking(mode: R18Mode) {
      dispatch(addRankingR18Column(mode))
    },
  }
}

const connector: Connector<{}, Props> = connect(
  undefined,
  mapDispatchToProps
)

export default connector(Modal)
