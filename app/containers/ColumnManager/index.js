// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { removeTable } from 'containers/Table/actions'
import ColumnRanking from '../ColumnRanking'
import ColumnRankingR18 from '../ColumnRankingR18'
import type { ColumnId as RankingId } from '../ColumnRanking/reducer'
import type { ColumnId as RankingR18Id } from '../ColumnRankingR18/reducer'
import type { ColumnManagerId, ColumnId, ColumnType } from './reducer'
import { makeSelectColumnId, makeSelectType } from './selectors'

export type Props = {
  columnId: RankingId | RankingR18Id | ColumnId,
  type: ColumnType,
  onClose: () => void,
}

function ColumnManager({ columnId, type, onClose }: Props) {
  if (type === 'RANKING') {
    // TODO 型がうまく扱えない
    // $FlowFixMe
    return <ColumnRanking id={columnId} onClose={onClose} />
  } else if (type === 'RANKING_R18') {
    // $FlowFixMe
    return <ColumnRankingR18 id={columnId} onClose={onClose} />
  }
  return null
}

type OP = {
  id: ColumnManagerId,
}

const mapStateToProps = createStructuredSelector({
  columnId: makeSelectColumnId(),
  type: makeSelectType(),
})

const mapDispatchToProps = (dispatch: Dispatch, { id }: OP) => ({
  onClose() {
    dispatch(removeTable(id))
  },
})

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnManager)
