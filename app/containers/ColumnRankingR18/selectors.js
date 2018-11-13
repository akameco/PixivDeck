// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'
import type { R18Mode } from './reducer'

type Props = {
  id: R18Mode,
}

const getR18Columns = (state: State) => state.ColumnRankingR18

export const makeSelectModes = () =>
  createSelector(getR18Columns, s => Object.keys(s))

const getColumn = (state: State, { id }: Props) => state.ColumnRankingR18[id]

export const makeSelectColumn = () => createSelector(getColumn, s => s)

export const getInterval = createSelector(getColumn, s => s.interval)

const makeSelectIllustIds = () =>
  createSelector(getColumn, s => (s && s.ids ? s.ids : []))

export const makeSelectIllusts = () =>
  createSelector(makeSelectIllustIds(), getIllustById, (s, arr) => {
    return s.map(v => arr[v])
  })
