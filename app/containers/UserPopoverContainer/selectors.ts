import { createSelector } from 'reselect'
import { State } from 'types'
import { getIllustById } from '../IllustById/selectors'

const selectPopover = (state: State) => state.UserPopoverContainer

export const makeSelectIllusts = () =>
  createSelector(
    selectPopover,
    s => s.illusts
  )
export const makeLimitedIllust = () =>
  createSelector(
    getIllustById,
    makeSelectIllusts(),
    (illusts, ids) => ids.map(v => illusts[v]).filter(v => v)
  )
