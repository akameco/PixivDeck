// @flow
import { handleRehydrate } from '../../services/reydrate'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type Restrict = 'public' | 'private'

export type Endpoint = '/v1/user/follows/illust'

export type ColumnId = Restrict

export type ColumnFollow = {|
  illustIds: Array<number>,
  nextUrl: ?string,
|}

export type State = $Shape<{ [ColumnId]: ColumnFollow }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_FOLLOW_COLUMN_SUCCESS:
      return { ...state, [action.id]: { illustIds: [], nextUrl: null } }

    case Actions.SET_NEXT_URL: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], nextUrl: action.nextUrl },
      }
    }

    case Actions.FETCH_FOLLOW_SUCCESS:
    case Actions.FETCH_NEXT_FOLLOW_SUCCESS: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], illustIds: action.ids },
      }
    }

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnFollow')
    default:
      return state
  }
}
