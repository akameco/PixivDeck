// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

type ColumnId = string
type BodyId = string
type BodyType = 'RANKING' | 'BOOKMARK'

export type Column = {
  id: ColumnId,
  title: string,
  bodyId: BodyId,
  type: BodyType,
}

export type Body = {
  id: BodyId,
  type: BodyType,
}

export type Ranking = {
  endpoint: '/v1/illust/ranking',
  params: {
    mode: string,
    offset: number,
  },
} & Body

export type State = {
  [id: string]: Column,
}

const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.ADD_COLUMN:
      return { ...state, [action.id]: action.body }
    default:
      return state
  }
}
