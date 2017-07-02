// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectModalManeger = (state: State) => state.ModalManeger

const makeSelectType = () =>
  createSelector(selectModalManeger, modalManeger => modalManeger.type)

const makeSelectOpen = () =>
  createSelector(selectModalManeger, modalManeger => modalManeger.open)

export { selectModalManeger, makeSelectType, makeSelectOpen }
