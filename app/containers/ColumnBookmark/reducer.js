// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { baseReducer, type BaseColumn } from '../Column/reducer'

export type Restrict = 'public' | 'private'

export type ColumnId = Restrict

export type ColumnBookmark = BaseColumn

export type State = $Shape<{ [ColumnId]: ColumnBookmark }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  return baseReducer('ColumnBookmark', Actions, state, action)
}
