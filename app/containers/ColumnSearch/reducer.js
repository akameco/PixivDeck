// @flow
import ms from 'ms'
import update from 'utils/update'
import { handleRehydrate } from 'utils/handleReydrate'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type ColumnId = string

export type ColumnSearch = {
  illustIds: Array<number>,
  nextUrl: ?string,
  minBookmarks: number,
  interval: number,
}

export type State = $Shape<{ [ColumnId]: ColumnSearch }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_COLUMN_SUCCESS:
      return update(state, action, {
        illustIds: [],
        nextUrl: null,
        minBookmarks: 0,
        interval: ms('1m'),
      })

    case Actions.SET_NEXT_URL:
      return update(state, action, { nextUrl: action.nextUrl })

    case Actions.SET_INTERVAL:
      return update(state, action, { interval: action.interval })

    case Actions.FETCH_SUCCESS:
    case Actions.FETCH_NEXT_SUCCESS:
    case Actions.FETCH_NEW_SUCCESS:
      return update(state, action, { illustIds: action.ids })

    case Actions.SET_MIN_BOOKBOOK:
      return update(state, action, { minBookmarks: action.minBookmarks })

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnSearch')

    default:
      return state
  }
}
