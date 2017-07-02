// @flow
import { handleRehydrate } from 'util/handleReydrate'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type R18Mode =
  | 'day_r18'
  | 'week_r18'
  | 'day_male_r18'
  | 'day_female_r18'
  | 'week_r18g'

export type Endpoint = '/v1/illust/ranking'

export type ColumnId = R18Mode

export type ColumnRanking = {|
  illustIds: Array<number>,
  nextUrl: ?string,
|}

export type State = $Shape<{ [R18Mode]: ColumnRanking }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_RANKING_R18_COLUMN_SUCCESS:
      return { ...state, [action.id]: { illustIds: [], nextUrl: null } }

    case Actions.SET_NEXT_URL: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], nextUrl: action.nextUrl },
      }
    }

    case Actions.FETCH_NEXT_RANKING_R18_SUCCESS:
    case Actions.FETCH_RANKING_R18_SUCCESS: {
      const id = action.id
      return {
        ...state,
        [id]: { ...state[id], illustIds: action.ids },
      }
    }

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnRankingR18')

    default:
      return state
  }
}
