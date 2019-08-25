import { Account } from 'types/account'
import { Action } from './actionTypes'
import {
  SET_AUTH,
  LOGIN_REQUEST,
  SET_REFRESH_TOKEN,
  SET_ACCOUNT,
  CLEAR_ERROR,
  LOGIN_FAILURE,
  LOGOUT,
  START_LOADING,
  END_LOADING,
  AUTO_LOGIN_REQUEST,
} from './constants'

export function setAuth(username: string, password: string): Action {
  return {
    type: SET_AUTH,
    username,
    password,
  }
}
export function loginRequest(username: string, password: string): Action {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  }
}
export function setRefreshToken(refreshToken: string): Action {
  return {
    type: SET_REFRESH_TOKEN,
    refreshToken,
  }
}
export function setAccount(account: Account): Action {
  return {
    type: SET_ACCOUNT,
    account,
  }
}
export function clearError(): Action {
  return {
    type: CLEAR_ERROR,
  }
}
export function loginFailure(): Action {
  return {
    type: LOGIN_FAILURE,
  }
}
export function logout(): Action {
  return {
    type: LOGOUT,
  }
}
export function startLoading(): Action {
  return {
    type: START_LOADING,
  }
}
export function endLoading(): Action {
  return {
    type: END_LOADING,
  }
}
export function autoLoginRequest(): Action {
  return {
    type: AUTO_LOGIN_REQUEST,
  }
}
