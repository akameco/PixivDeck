// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectHeader = (state: State) => state.HeaderContainer

export const makeSelectisOpenDropdown = () =>
  createSelector(
    selectHeader,
    s => s.isOpenDropdown
  )

export const makeSelectisOpenSearchField = () =>
  createSelector(
    selectHeader,
    s => s.isOpenSearchField
  )
