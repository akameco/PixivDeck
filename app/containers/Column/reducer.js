// @flow
import update from 'utils/update'

export type BaseColumn = {
  ids: Array<number>,
  nextUrl: ?string,
}

type ActionTypes = {
  ADD_COLUMN_SUCCESS: $Subtype<string>,
  SET_NEXT_URL: $Subtype<string>,
  FETCH_SUCCESS: $Subtype<string>,
  FETCH_NEXT_SUCCESS?: $Subtype<string>,
  FETCH_NEW_SUCCESS?: $Subtype<string>,
}

export function baseReducer<
  T: BaseColumn,
  S: { [*]: T },
  AS: ActionTypes,
  A: { +type: $Subtype<string> }
>(name: string, types: AS, state: S, action: A): S {
  switch (action.type) {
    case types.SET_NEXT_URL:
      return update(state, action, { nextUrl: action.nextUrl })
    case types.ADD_COLUMN_SUCCESS:
      return update(state, action, { ids: [], nextUrl: null })
    case types.FETCH_SUCCESS:
    case types.FETCH_NEXT_SUCCESS:
    case types.FETCH_NEW_SUCCESS:
      return update(state, action, { ids: action.ids })
    default:
      return state
  }
}
