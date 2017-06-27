// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectRoot = (state: State) => state.Table

export const makeSelectNames = () => createSelector(selectRoot, s => s.names)
