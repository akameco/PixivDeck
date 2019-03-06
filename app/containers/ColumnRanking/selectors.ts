import { createSelector } from 'reselect'
import { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'
import { Mode } from './reducer'

interface Props {
  id: Mode
}

const getColumns = (state: State) => state.ColumnRanking

export const makeSelectModes = () =>
  createSelector(
    getColumns,
    s => Object.keys(s)
  )

const getColumn = (state: State, { id }: Props) => state.ColumnRanking[id]

export const makeSelectColumn = () =>
  createSelector(
    getColumn,
    s => s
  )

export const getInterval = createSelector(
  getColumn,
  s => s.interval
)

const makeSelectIllustIds = () =>
  createSelector(
    getColumn,
    s => (s && s.ids ? s.ids : [])
  )

export const makeSelectIllusts = () =>
  createSelector(
    makeSelectIllustIds(),
    getIllustById,
    (s, arr) => {
      return s.map(v => arr[v])
    }
  )
