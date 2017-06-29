// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ColumnRanking from '../ColumnRanking'
import type { ColumnManagerId, ColumnId, ColumnType } from './reducer'
import { makeSelectColumnId, makeSelectType } from './selectors'

type Props = {
  columnId: ColumnId,
  type: ColumnType,
}

function ColumnManager({ columnId, type }: Props) {
  if (type === 'RANKING') {
    return <ColumnRanking id={columnId} />
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

const connector: Connector<OP, Props> = connect(mapStateToProps)

export default connector(ColumnManager)
