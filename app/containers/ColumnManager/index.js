// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { remove as close } from 'containers/Table/actions'
import ColumnRanking from '../ColumnRanking'
import type { ColumnId as RankingId } from '../ColumnRanking/reducer'
import type { ColumnManagerId, ColumnId, ColumnType } from './reducer'
import { makeSelectColumnId, makeSelectType } from './selectors'

export type Props = {
  columnId: RankingId | ColumnId,
  type: ColumnType,
  onClose: () => void,
}

function ColumnManager({ columnId, type, onClose }: Props) {
  if (type === 'RANKING') {
    // TODO 型がうまく扱えない
    // $FlowFixMe
    return <ColumnRanking id={columnId} onClose={onClose} />
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
    dispatch(close(id))
  },
})

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnManager)
