// @flow
import { createSelector } from 'reselect'
import type { State } from 'types'

const selectPopover = (state: State) => state.UserPopoverContainer

const makeSelectIllusts = () => createSelector(selectPopover, s => s.illusts)

export { selectPopover, makeSelectIllusts }
