// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectPreviewSelect = (state: State) => state.MangaPreview

const getSelectIllust = (state: State, { id }: { id: number }) =>
  state.illustById[id]

export const makeSelectIllust = () => createSelector(getSelectIllust, s => s)

export const makeSelectOpen = () =>
  createSelector(selectPreviewSelect, s => s.open)

const selectManage = (state: State) => state.manage

export const makeSelectId = () =>
  createSelector(selectManage, s => s.currentIllustId)
