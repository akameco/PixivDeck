// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectIllustPreview = (state: State) => state.IllustPreview

export const makeSelectIsImage = () =>
  createSelector(selectIllustPreview, s => s.open)

export const makeSelectIsImgLoding = () =>
  createSelector(selectIllustPreview, s => s.isImgLoading)

const getSelectIllust = (state: State, { id }: { id: number }) =>
  state.illustById[id]

export const makeSelectIllust = () => createSelector(getSelectIllust, s => s)
