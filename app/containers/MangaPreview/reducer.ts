import { Action } from './actionTypes'
import * as Actions from './constants'

export interface State {
  id: number | null | undefined
  open: boolean
}

const initialState: State = {
  id: null,
  open: false,
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.OPEN_MANGA_PREVIEW:
      return { ...state, open: true, id: action.id }

    case Actions.CLOSE_MANGA_PREVIEW:
      return { ...state, open: false, id: null }

    default:
      return state
  }
}
