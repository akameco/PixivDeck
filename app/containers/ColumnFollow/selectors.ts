import { createSelector } from 'reselect'
import { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'
import { ColumnId } from './reducer'

interface Props {
  id: ColumnId
}

const getColumns = (state: State) => state.ColumnFollow

export const makeSelectIds = () =>
  createSelector(
    getColumns,
    s => Object.keys(s)
  )

const getColumn = (state: State, { id }: Props) => state.ColumnFollow[id]

export const makeSelectColumn = () =>
  createSelector(
    getColumn,
    s => s
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
