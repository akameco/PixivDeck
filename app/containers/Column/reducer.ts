import update from 'utils/update'
import { AnyAction } from 'redux'

export interface BaseColumn {
  ids: number[]
  nextUrl: string | null | undefined
}
interface ActionTypes {
  ADD_COLUMN_SUCCESS: Partial<string>
  SET_NEXT_URL: Partial<string>
  FETCH_SUCCESS: Partial<string>
  FETCH_NEXT_SUCCESS?: Partial<string>
  FETCH_NEW_SUCCESS?: Partial<string>
}
export function baseReducer<
  T extends BaseColumn,
  State extends {
    [a: string]: T
  },
  AS extends ActionTypes,
  Action extends AnyAction
>(_name: string, types: AS, state: State, action: Action): State {
  switch (action.type) {
    case types.SET_NEXT_URL:
      return update(state, action, {
        nextUrl: action.nextUrl,
      })

    case types.ADD_COLUMN_SUCCESS:
      return update(state, action, {
        ids: [],
        nextUrl: null,
      })

    case types.FETCH_SUCCESS:
    case types.FETCH_NEXT_SUCCESS:
    case types.FETCH_NEW_SUCCESS:
      return update(state, action, {
        ids: action.ids,
      })

    default:
      return state
  }
}
