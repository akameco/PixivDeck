import { createSelector } from 'reselect'
import { State } from 'types/state'

const selectRoot = (state: State) => state.Table

export const makeSelectIds = () =>
  createSelector(
    selectRoot,
    s => s.ids
  )
