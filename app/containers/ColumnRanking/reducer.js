// @flow
import type { Column, ColumnId } from '../ColumnManager/reducer'
import type { Action, AddColumnAction } from './actionTypes'
import * as Actions from './constants'

export type Mode =
  | 'day'
  | 'week'
  | 'month'
  | 'day_male'
  | 'day_female'
  | 'week_original'
  | 'week_rookie'

export type Endpoint = '/v1/illust/ranking'

export type ColumnRanking = {|
  mode: Mode,
  illustIds: Array<number>,
  title: string,
  nextUrl: ?string,
|} & Column

export type State = {} | {| [id: ColumnId]: ColumnRanking |}

const initialState: State = {}

// Obj as Mapでflowが効かないので分離. (ex: {[key: strng]: Object})
// 基本的にtype Actionのみが望ましいが上記の理由より個別のActionTypeを作成
function add(action: AddColumnAction): ColumnRanking {
  return {
    mode: action.mode,
    illustIds: [],
    title: action.title,
    nextUrl: null,
  }
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_RANKING_COLUMN_SUCCESS:
      return { ...state, [action.id]: add(action) }
    case Actions.SET_NEXT_URL:
      return {
        ...state,
        [action.id]: { ...state[action.id], nextUrl: action.nextUrl },
      }
    case Actions.FETCH_RANKING_SUCCESS:
      return {
        ...state,
        [action.id]: { ...state[action.id], illustIds: action.ids },
      }
    default:
      return state
  }
}
