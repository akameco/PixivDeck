import update from 'utils/update'
import { baseReducer, BaseColumn } from '../Column/reducer'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnId = 'recommended'
export type ColumnRecommended = BaseColumn
export interface State {
  recommended: $Shape<ColumnRecommended>
}
const initialState: State = {
  recommended: {},
}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.CLERE:
      return update(state, action, {
        ids: [],
        nextUrl: null,
      })

    default:
      return baseReducer('ColumnRecommended', Actions, state, action)
  }
}
