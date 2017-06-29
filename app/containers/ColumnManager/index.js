// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { remove as close } from 'containers/Table/actions'
import ColumnRanking from '../ColumnRanking'
import type { ColumnManagerId, ColumnId, ColumnType } from './reducer'
import { makeSelectColumnId, makeSelectType } from './selectors'

type Props = {
  columnId: ColumnId,
  type: ColumnType,
  onClose: () => void,
}

function ColumnManager({ columnId, type, onClose }: Props) {
  if (type === 'RANKING') {
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
