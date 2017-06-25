// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectRoot = (state: State) => state.UserDrawerContainer

export const makeSelectProfile = () =>
  createSelector(selectRoot, s => s.profile)

const makeSelectIllustList = () => createSelector(selectRoot, s => s.illustList)

const makeSelectMangaList = () => createSelector(selectRoot, s => s.mangaList)

export const makeSelectUser = () => createSelector(selectRoot, s => s.user)

const getSelectUser = (state: State, { id }: { id: number }) =>
  state.userById[id]

export const makeSelectUserById = () => createSelector(getSelectUser, s => s)

const selectIllustById = (state: State) => state.illustById

export const makeGetIllusts = () =>
  createSelector(makeSelectIllustList(), selectIllustById, (s, arr) =>
    s.map(v => arr[v])
  )

export const makeGetMangas = () =>
  createSelector(makeSelectMangaList(), selectIllustById, (s, arr) =>
    s.map(v => arr[v])
  )
