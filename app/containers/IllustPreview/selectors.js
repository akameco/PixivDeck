// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'

const selectIllustPreview = (state: State) => state.IllustPreview

export const makeSelectIsImage = () =>
  createSelector(
    selectIllustPreview,
    s => s.open
  )

export const makeSelectIsImgLoding = () =>
  createSelector(
    selectIllustPreview,
    s => s.isImgLoading
  )

const getSelectId = createSelector(
  selectIllustPreview,
  s => s.id
)

export const makeSelectIllust = () =>
  createSelector(
    getIllustById,
    getSelectId,
    (illusts, id) => id && illusts[id]
  )
