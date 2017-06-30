// @flow
import { createSelector } from 'reselect'
import type { State } from 'types'

const selectPopover = (state: State) => state.UserPopoverContainer

export const makeSelectIllusts = () =>
  createSelector(selectPopover, s => s.illusts)

const selectIllustById = (state: State) => state.illustById

export const makeLimitedIllust = () =>
  createSelector(selectIllustById, makeSelectIllusts(), (illusts, ids) =>
    ids.map(v => illusts[v]).filter(v => v)
  )
