// @flow
import { union } from 'lodash'
import { REHYDRATE } from 'redux-persist/constants'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnId = 'RANKING'

export type State = {
  illustIds: Array<number>,
}

const initialState: State = {
  illustIds: [],
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.ADD_HISTORY:
      return { illustIds: union([action.id, ...state.illustIds]) }
    case REHYDRATE: {
      // $FlowFixMe
      const oldState: State = action.payload.ColumnHistory
      if (oldState) {
        return { illustIds: [] }
      }
      return state
    }
    default:
      return state
  }
}
