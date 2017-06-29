// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import type { ColumnId } from './reducer'

type Props = {
  id: ColumnId,
}

const getColumns = (state: State) => state.ColumnFollow

export const makeSelectIds = () =>
  createSelector(getColumns, s => Object.keys(s))

const getColumn = (state: State, { id }: Props) => state.ColumnFollow[id]

export const makeSelectColumn = () => createSelector(getColumn, s => s)

const makeSelectIllustIds = () =>
  createSelector(getColumn, s => (s && s.illustIds ? s.illustIds : []))

const selectIllustById = (state: State) => state.illustById

export const makeSelectIllusts = () =>
  createSelector(makeSelectIllustIds(), selectIllustById, (s, arr) => {
    return s.map(v => arr[v])
  })
