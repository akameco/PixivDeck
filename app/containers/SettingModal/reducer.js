// @flow
import union from 'lodash.union'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  isShowCaption: boolean,
  isShowOnlyIllust: boolean,
  // TODO: Set?
  tags: Array<string>,
}

const initialState: State = {
  isShowCaption: false,
  isShowOnlyIllust: false,
  tags: [],
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SET_SHOW_CAPTION:
      return { ...state, isShowCaption: action.show }
    case Actions.SET_SHOW_ONLY_ILLUST:
      return { ...state, isShowOnlyIllust: action.show }
    case Actions.ADD_TAG_FILTER:
      return { ...state, tags: union([...state.tags, action.tag]) }
    case Actions.REMOVE_TAG_FILTER: {
      const { tag } = action
      return { ...state, tags: state.tags.filter(v => tag !== v) }
    }
    default:
      return state
  }
}
