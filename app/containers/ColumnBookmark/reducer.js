// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type Restrict = 'public' | 'private'

export type Endpoint = '/v1/user/bookmarks/illust'

export type ColumnId = Restrict

export type ColumnBookmark = {|
  illustIds: Array<number>,
  nextUrl: ?string,
|}

export type State = $Shape<{ [ColumnId]: ColumnBookmark }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_BOOKMARK_COLUMN_SUCCESS:
      return { ...state, [action.id]: { illustIds: [], nextUrl: null } }

    case Actions.SET_NEXT_URL: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], nextUrl: action.nextUrl },
      }
    }

    case Actions.FETCH_BOOKMARK_SUCCESS:
    case Actions.FETCH_NEXT_BOOKMARK_SUCCESS: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], illustIds: action.ids },
      }
    }

    // TODO REHYDRATEをまとめる
    case REHYDRATE: {
      // $FlowFixMe
      const oldState = action.payload.ColumnBookmark

      if (oldState) {
        const newState = Object.keys(oldState).reduce((acc, key) => {
          acc[key] = {
            illustIds: [],
            nextUrl: null,
          }
          return acc
        }, {})
        return newState
      }
      return state
    }

    default:
      return state
  }
}
