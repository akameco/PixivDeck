// @flow
import { combineReducers } from 'redux'
import type { State } from 'types'
import type { User } from 'types/user'
import type { Illust } from 'types/illust'
import LanguageProvider from '../containers/LanguageProvider/reducer'
import manage from './manage'
import columns from './columns'
import filter from './filter'
import auth from './auth'
import config from './config'
import illustById, * as fromIllustById from './illustById'
import userById, * as fromUserById from './userById'
import drawer from './drawer'
import popover from './popover'
import ModalManeger from '../containers/ModalManeger/reducer'

const rootReducer = combineReducers({
  language: LanguageProvider,
  manage,
  columns,
  filter,
  auth,
  config,
  illustById,
  userById,
  drawer,
  popover,
  ModalManeger,
})

export const getColumn = ({ columns }: State, id: number) =>
  columns.filter(c => c.id === id)[0]

const filterByMinBookmarks = (illust: Illust, bookmarks: number): boolean =>
  illust.totalBookmarks >= bookmarks

const filterByTags = (illust: Illust, tags: Array<string>): boolean =>
  illust.tags.every(t => tags.every(tag => !t.name.includes(tag)))

export const getIllust = ({ illustById }: State, id: number): Illust =>
  fromIllustById.getIllust(illustById, id)

export const getIllusts = (state: State, columnId: number) => {
  const column = getColumn(state, columnId)
  return column.ids
    .map(id => getIllust(state, id))
    .filter(
      v =>
        filterByTags(v, state.filter.tags) &&
        filterByMinBookmarks(v, column.minBookmarks),
    )
}

export const getDrawerIllusts = (state: State) =>
  state.drawer.illusts.map(id => fromIllustById.getIllust(state.illustById, id))

export const getDrawerMangas = (state: State) =>
  state.drawer.mangas.map(id => fromIllustById.getIllust(state.illustById, id))

export const getUser = (state: State, userId: number): User =>
  fromUserById.getUser(state, userId)

export const getCurrentUser = (state: State): ?User => {
  if (state.manage.userId) {
    return state.userById[state.manage.userId]
  }
  return null
}

export default rootReducer
