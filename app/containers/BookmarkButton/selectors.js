// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const getSelectIllust = (state: State, { id }: { id: number }) =>
  state.illustById[id]

export const makeSelectIllust = () => createSelector(getSelectIllust, s => s)

export const makeIsBookmarked = () =>
  createSelector(makeSelectIllust(), s => s.isBookmarked)
