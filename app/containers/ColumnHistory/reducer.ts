import { union } from 'lodash'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnId = 'RANKING'
export interface State {
  illustIds: number[]
}
const initialState: State = {
  illustIds: [],
}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_HISTORY:
      return {
        illustIds: union([action.id, ...state.illustIds]),
      }

    default:
      return state
  }
}
