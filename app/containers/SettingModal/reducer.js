// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  isShowCaption: boolean,
  isShowOnlyIllust: boolean,
}

const initialState: State = {
  isShowCaption: false,
  isShowOnlyIllust: false,
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SET_SHOW_CAPTION:
      return { ...state, isShowCaption: action.show }
    case Actions.SET_SHOW_ONLY_ILLUST:
      return { ...state, isShowOnlyIllust: action.show }
    default:
      return state
  }
}
