// @flow
import update from 'utils/update'
import { Actions, type Action } from './actionTypes'
import { baseReducer, type BaseColumn } from '../Column/reducer'

export type Restrict = 'public' | 'private'

export type ColumnId = Restrict

export type ColumnBookmark = BaseColumn

export type State = $Shape<{ [ColumnId]: ColumnBookmark }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.REMOVE_ITEM: {
      const item = action.item
      return update(state, action, {
        ids: state.public.ids.filter(id => id !== item),
      })
    }
    default:
      return baseReducer('ColumnBookmark', Actions, state, action)
  }
}
