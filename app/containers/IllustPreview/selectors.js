// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectIllustPreview = (state: State) => state.IllustPreview

export const makeSelectIsImage = () =>
  createSelector(selectIllustPreview, s => s.open)
