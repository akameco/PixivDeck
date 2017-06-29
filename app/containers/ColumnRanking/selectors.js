// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: string,
}

const getColumn = (state: State, { id }: Props) => state.ColumnRanking[id]

export const makeSelectColumn = () => createSelector(getColumn, s => s)

export const makeSelectMode = () => createSelector(getColumn, s => s.mode)
export const makeSelectTitle = () => createSelector(getColumn, s => s.title)

const makeSelectIllustIds = () => createSelector(getColumn, s => s.illustIds)

const selectIllustById = (state: State) => state.illustById

export const makeSelectIllusts = () =>
  createSelector(makeSelectIllustIds(), selectIllustById, (s, arr) => {
    return s.map(v => arr[v])
  })
