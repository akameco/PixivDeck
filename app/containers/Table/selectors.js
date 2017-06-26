// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectRoot = (state: State) => state.columns

export const makeSelectIds = () =>
  createSelector(selectRoot, s => s.map(v => v.id))
