// @flow
import { createSelector } from 'reselect'
import type { State } from 'types'

const selectPopover = (state: State) => state.popover

const makeSelectIllusts = () =>
  createSelector(selectPopover, popoverState => popoverState.illusts)

export { selectPopover, makeSelectIllusts }
