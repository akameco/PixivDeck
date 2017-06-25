// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectManage = (state: State) => state.manage

export const makeSelectId = () =>
  createSelector(selectManage, s => s.currentIllustId)
