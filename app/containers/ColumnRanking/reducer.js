// @flow
import update from 'util/update'
import { handleRehydrate } from 'util/handleReydrate'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type Mode =
  | 'day'
  | 'week'
  | 'month'
  | 'day_male'
  | 'day_female'
  | 'week_original'
  | 'week_rookie'

export type ColumnId = Mode

export type ColumnRanking = {|
  illustIds: Array<number>,
  nextUrl: ?string,
|}

export type State = $Shape<{ [Mode]: ColumnRanking }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_RANKING_COLUMN_SUCCESS:
      return update(state, action, { illustIds: [], nextUrl: null })

    case Actions.SET_NEXT_URL:
      return update(state, action, { nextUrl: action.nextUrl })

    case Actions.FETCH_RANKING_SUCCESS:
    case Actions.FETCH_NEXT_RANKING_SUCCESS:
      return update(state, action, { illustIds: action.ids })

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnRanking')
    default:
      return state
  }
}
