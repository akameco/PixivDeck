// @flow
import { isEmpty } from 'lodash'
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { getIllustById } from '../IllustById/selectors'

const getC = (state: State) => state.ColumnRecommended

export const makeSelectModes = () => createSelector(getC, s => Object.keys(s))

const getColumn = (state: State) => state.ColumnRecommended.recommended

export const makeSelectColumn = () => createSelector(getColumn, s => s)

const makeSelectIllustIds = () => createSelector(getColumn, s => s.ids)

export const makeSelectIllusts = () =>
  createSelector(makeSelectIllustIds(), getIllustById, (s, arr) => {
    return isEmpty(s) ? [] : s.map(v => arr[v])
  })
