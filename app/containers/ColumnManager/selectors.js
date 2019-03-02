// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: string,
}

const getColumnManeger = (state: State, { id }: Props) =>
  state.ColumnManager[id]

export const makeSelectColumnId = () =>
  createSelector(
    getColumnManeger,
    s => s.columnId
  )

export const makeSelectType = () =>
  createSelector(
    getColumnManeger,
    s => s.type
  )
