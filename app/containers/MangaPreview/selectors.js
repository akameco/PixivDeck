// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectPreviewSelect = (state: State) => state.MangaPreview

const selectIllustById = (state: State) => state.illustById

const getSelectId = createSelector(selectPreviewSelect, s => s.id)

export const makeSelectIllust = () =>
  createSelector(
    selectIllustById,
    getSelectId,
    (illusts, id) => id && illusts[id]
  )

export const makeSelectOpen = () =>
  createSelector(selectPreviewSelect, s => s.open)
