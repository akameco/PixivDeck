// @flow
import update from 'utils/update'
import { handleRehydrate } from 'utils/handleReydrate'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { REHYDRATE } from 'redux-persist/constants'

export type ColumnId = number

export type ColumnUserIllust = {|
  illustIds: Array<number>,
  nextUrl: ?string,
|}

export type State = $Shape<{ [ColumnId]: ColumnUserIllust }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_USER_ILLUST_COLUMN_SUCCESS:
      return update(state, action, { illustIds: [], nextUrl: null })

    case Actions.SET_NEXT_URL:
      return update(state, action, { nextUrl: action.nextUrl })

    case Actions.FETCH_USER_ILLUST_SUCCESS:
    case Actions.FETCH_NEXT_USER_ILLUST_SUCCESS:
      return update(state, action, { illustIds: action.ids })

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnUserIllust')
    default:
      return state
  }
}
