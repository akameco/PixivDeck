// @flow
import update from 'utils/update'
import { handleRehydrate } from 'utils/handleReydrate'
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
      return update(state, action, { illustIds: [], nextUrl: null })

    case Actions.SET_NEXT_URL:
      return update(state, action, { nextUrl: action.nextUrl })

    case Actions.FETCH_BOOKMARK_SUCCESS:
    case Actions.FETCH_NEXT_BOOKMARK_SUCCESS:
      return update(state, action, { illustIds: action.ids })

    case REHYDRATE:
      return handleRehydrate(state, action, 'ColumnBookmark')
    default:
      return state
  }
}
