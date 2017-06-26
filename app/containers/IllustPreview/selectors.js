// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectIllustPreview = (state: State) => state.IllustPreview

export const makeSelectIsImage = () =>
  createSelector(selectIllustPreview, s => s.open)

export const makeSelectIsImgLoding = () =>
  createSelector(selectIllustPreview, s => s.isImgLoading)

const selectIllustById = (state: State) => state.illustById

const getSelectId = createSelector(selectIllustPreview, s => s.id)

export const makeSelectIllust = () =>
  createSelector(
    selectIllustById,
    getSelectId,
    (illusts, id) => id && illusts[id]
  )
