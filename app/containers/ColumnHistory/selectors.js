// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'

const getColumn = (state: State) => state.ColumnHistory

export const makeSelectColumn = () =>
  createSelector(
    getColumn,
    s => s
  )

const makeSelectIllustIds = () =>
  createSelector(
    getColumn,
    s => (s && s.illustIds ? s.illustIds : [])
  )

export const makeSelectIllusts = () =>
  createSelector(
    makeSelectIllustIds(),
    getIllustById,
    (s, arr) => {
      return s.map(v => arr[v])
    }
  )
