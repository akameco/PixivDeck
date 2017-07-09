// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  username: string,
  password: string,
  isLoading: boolean,
  isLoginFailure: boolean,
}

export const initialState: State = {
  username: '',
  password: '',
  isLoading: false,
  isLoginFailure: false,
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SET_AUTH:
      return { ...state, username: action.username, password: action.password }
    case Actions.LOGIN_REQUEST:
      return { ...state, isLoading: true }
    case Actions.START_LOADING:
      return { ...state, isLoading: true }
    case Actions.END_LOADING:
      return { ...state, isLoading: false }
    case Actions.LOGIN_FAILURE:
      return { ...state, isLoginFailure: true }
    case Actions.CLEAR_ERROR:
      return { ...state, isLoginFailure: false }
    default:
      return state
  }
}
