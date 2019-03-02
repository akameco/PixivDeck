// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectRoot = (state: State) => state.DrawerManager

export const makeSelectOpen = () =>
  createSelector(
    selectRoot,
    s => s.open
  )
