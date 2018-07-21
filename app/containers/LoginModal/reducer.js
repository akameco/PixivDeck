// @flow
import type { Account } from 'types/account'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  username: string,
  password: string,
  refreshToken: ?string,
  isLoading: boolean,
  isLoginFailure: boolean,
  account: ?Account,
}

export const initialState: State = {
  username: '',
  password: '',
  refreshToken: null,
  isLoading: false,
  isLoginFailure: false,
  account: null,
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
    case Actions.SET_ACCOUNT:
      return { ...state, account: action.account }
    case Actions.SET_REFRESH_TOKEN:
      return { ...state, refreshToken: action.refreshToken }
    default:
      return state
  }
}
