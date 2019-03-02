// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectRoot = (state: State) => state.Table

export const makeSelectIds = () =>
  createSelector(
    selectRoot,
    s => s.ids
  )
