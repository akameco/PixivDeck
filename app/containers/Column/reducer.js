// @flow
import update from 'utils/update'

export type BaseColumn = {
  illustIds: Array<number>,
  nextUrl: ?string,
}

type ActionTypes = {
  ADD_COLUMN_SUCCESS: $Subtype<string>,
  SET_NEXT_URL: $Subtype<string>,
}

export function baseReducer<
  T: BaseColumn,
  S: { [*]: T },
  AS: ActionTypes,
  A: { +type: $Subtype<string> }
>(types: AS, state: S, action: A): S {
  switch (action.type) {
    case types.SET_NEXT_URL:
      return update(state, action, { nextUrl: action.nextUrl })
    case types.ADD_COLUMN_SUCCESS:
      return update(state, action, { illustIds: [], nextUrl: null })
    default:
      return state
  }
}
