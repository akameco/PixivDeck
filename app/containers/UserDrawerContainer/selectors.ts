import { createSelector } from 'reselect'
import { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'

const selectRoot = (state: State) => state.UserDrawerContainer

export const makeSelectProfile = () =>
  createSelector(
    selectRoot,
    s => s.profile
  )
export const makeSelectIllustList = () =>
  createSelector(
    selectRoot,
    s => s.illustList
  )
export const makeSelectMangaList = () =>
  createSelector(
    selectRoot,
    s => s.mangaList
  )
export const getNextIllustUrl = createSelector(
  selectRoot,
  s => s.nextIllustUrl
)
export const getNextMangaUrl = createSelector(
  selectRoot,
  s => s.nextMangaUrl
)
export const makeSelectUser = () =>
  createSelector(
    selectRoot,
    s => s.user
  )
export const makeGetIllusts = () =>
  createSelector(
    makeSelectIllustList(),
    getIllustById,
    (s, arr) => s.map(v => arr[v])
  )
export const makeGetMangas = () =>
  createSelector(
    makeSelectMangaList(),
    getIllustById,
    (s, arr) => s.map(v => arr[v])
  )
