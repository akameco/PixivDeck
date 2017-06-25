// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  open: boolean,
  isImgLoading: boolean,
}

const initialState: State = {
  open: false,
  isImgLoading: false,
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.OPEN_ILLUST_VIEWER:
      return { ...state, open: true }
    case Actions.COLOSE_ILLUST_VIEWER:
      return { ...state, open: false }
    case Actions.START_IMG_LOADING:
      return { ...state, isImgLoading: true }
    case Actions.FINISH_IMG_LOADING:
      return { ...state, isImgLoading: false }
    default:
      return state
  }
}
