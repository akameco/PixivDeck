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
  createSelector(getColumns, s => Object.keys(s))

const getColumn = (state: State, { id }: Props) => state.ColumnSearch[id]

export const makeSelectColumn = () => createSelector(getColumn, s => s)

export const makeSelectMinBookmark = () =>
  createSelector(makeSelectColumn(), s => s.minBookmarks)

export const makeSelectNextUrl = () =>
  createSelector(makeSelectColumn(), s => s.nextUrl)

export const makeSelectHasMore = () =>
  createSelector(makeSelectColumn(), s => {
    if (s.nextUrl) {
      return true
    } else if (!s.nextUrl && s.illustIds.length > 0) {
      return false
    } else if (!s.nextUrl && s.illustIds.length === 0) {
      return true
    }
    return true
  })

const makeSelectIllustIds = () =>
  createSelector(getColumn, s => (s && s.illustIds ? s.illustIds : []))

export const makeSelectIllusts = () =>
  createSelector(makeSelectIllustIds(), makeIllustsFilterByTags(), (s, obj) => {
    return s.map(v => obj[v]).filter(v => v)
  })

export const makeLimitedSelectIllusts = () =>
  createSelector(makeSelectIllusts(), makeSelectMinBookmark(), (s, limit) =>
    s.filter(s => s.totalBookmarks > limit)
  )

export const makeIllustLength = () =>
  createSelector(makeLimitedSelectIllusts(), s => s.length)
