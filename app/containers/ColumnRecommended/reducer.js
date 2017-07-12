// @flow
import update from 'utils/update'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { baseReducer, type BaseColumn } from '../Column/reducer'

export type ColumnId = 'recommended'

export type ColumnRecommended = BaseColumn

export type State = { recommended: $Shape<ColumnRecommended> }

const initialState: State = { recommended: {} }

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.CLERE:
      return update(state, action, { ids: [], nextUrl: null })
    default:
      return baseReducer('ColumnRecommended', Actions, state, action)
  }
}
