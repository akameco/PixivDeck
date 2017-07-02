// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'

const selectPreviewSelect = (state: State) => state.MangaPreview

const getSelectId = createSelector(selectPreviewSelect, s => s.id)

export const makeSelectIllust = () =>
  createSelector(getIllustById, getSelectId, (illusts, id) => id && illusts[id])

export const makeSelectOpen = () =>
  createSelector(selectPreviewSelect, s => s.open)
