import { createSelector } from 'reselect'
import { State } from 'types/state'

const selectRoot = (state: State) => state.DrawerManager

export const makeSelectOpen = () =>
  createSelector(
    selectRoot,
    s => s.open
  )
