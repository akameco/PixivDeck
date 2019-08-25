import { Action } from './actionTypes'
import * as Actions from './constants'

export interface State {
  open: boolean
  id: number | null | undefined
  isImgLoading: boolean
}
const initialState: State = {
  open: false,
  id: null,
  isImgLoading: false,
}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.OPEN_ILLUST_VIEWER:
      return { ...state, open: true, id: action.id }

    case Actions.COLOSE_ILLUST_VIEWER:
      return { ...state, open: false, id: null }

    case Actions.START_IMG_LOADING:
      return { ...state, isImgLoading: true }

    case Actions.FINISH_IMG_LOADING:
      return { ...state, isImgLoading: false }

    default:
      return state
  }
}
