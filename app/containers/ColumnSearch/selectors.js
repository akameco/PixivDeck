// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { makeIllustsFilterByTags } from '../IllustById/selectors'
import type { ColumnId } from './reducer'

type Props = {
  id: ColumnId,
}

const getColumns = (state: State) => state.ColumnSearch

export const makeSelectIds = () =>
  createSelector(
    getColumns,
    s => Object.keys(s)
  )

const getColumn = (state: State, { id }: Props) => state.ColumnSearch[id]

export const makeSelectColumn = () =>
  createSelector(
    getColumn,
    s => s
  )

export const getInterval = createSelector(
  makeSelectColumn(),
  s => s.interval
)

export const makeSelectMinBookmark = () =>
  createSelector(
    makeSelectColumn(),
    s => s.minBookmarks || 0
  )

export const makeSelectNextUrl = () =>
  createSelector(
    makeSelectColumn(),
    s => s.nextUrl
  )

export const makeSelectUsesIn = () =>
  createSelector(
    makeSelectColumn(),
    s => s.usersIn
  )

export const makeSelectHasMore = () =>
  createSelector(
    makeSelectColumn(),
    s => {
      if (s.nextUrl) {
        return true
      } else if (!s.nextUrl && s.ids.length > 0) {
        return false
      } else if (!s.nextUrl && s.ids.length === 0) {
        return true
      }
      return true
    }
  )

const makeSelectIllustIds = () =>
  createSelector(
    getColumn,
    s => (s && s.ids ? s.ids : [])
  )

export const makeSelectIllusts = () =>
  createSelector(
    makeSelectIllustIds(),
    makeIllustsFilterByTags(),
    (s, obj) => {
      return s.map(v => obj[v]).filter(v => v)
    }
  )

export const makeLimitedSelectIllusts = () =>
  createSelector(
    makeSelectIllusts(),
    makeSelectMinBookmark(),
    (s, limit) => s.filter(s => s.totalBookmarks > limit)
  )

export const makeLimitedSelectIllustsId = () =>
  createSelector(
    makeLimitedSelectIllusts(),
    s => s.map(v => v.id)
  )

export const makeIllustLength = () =>
  createSelector(
    makeLimitedSelectIllusts(),
    s => s.length
  )
