// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import type { Mode } from './reducer'

type Props = {
  id: Mode,
}

const getColumns = (state: State) => state.ColumnRanking

export const makeSelectModes = () =>
  createSelector(getColumns, s => Object.keys(s))

const getColumn = (state: State, { id }: Props) => state.ColumnRanking[id]

export const makeSelectColumn = () => createSelector(getColumn, s => s)

const makeSelectIllustIds = () => createSelector(getColumn, s => s.illustIds)

const selectIllustById = (state: State) => state.illustById

export const makeSelectIllusts = () =>
  createSelector(makeSelectIllustIds(), selectIllustById, (s, arr) => {
    return s.map(v => arr[v])
  })
