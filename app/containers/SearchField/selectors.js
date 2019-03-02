// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectRoot = (state: State) => state.SearchField

export const makeSelectKeyword = () =>
  createSelector(
    selectRoot,
    s => s.keywords
  )
