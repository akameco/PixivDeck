// @flow
import { handleRehydrate } from '../../services/reydrate'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type ColumnId = string

export type ColumnSearch = {|
  illustIds: Array<number>,
  nextUrl: ?string,
  minBookmarks: number,
|}

export type State = $Shape<{ [ColumnId]: ColumnSearch }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_COLUMN_SUCCESS:
      return {
        ...state,
        [action.id]: { illustIds: [], nextUrl: null, minBookmarks: 0 },
      }

    case Actions.SET_NEXT_URL: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], nextUrl: action.nextUrl },
      }
    }

    case Actions.FETCH_SUCCESS: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], illustIds: action.ids },
      }
    }

    case Actions.SET_MIN_BOOKBOOK: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], minBookmarks: action.minBookmarks },
      }
    }

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnSearch')
    default:
      return state
  }
}
