// @flow
import type { Account } from 'types/account'

export type LOGIN_REQUEST_TYPE = 'LoginModal/LOGIN_REQUEST'
export type LOGIN_SUCCESS_TYPE = 'LoginModal/LOGIN_SUCCESS'
export type LOGIN_FAILURE_TYPE = 'LoginModal/LOGIN_FAILURE'

export type START_LOADING_TYPE = 'LoginModal/START_LOADING'
export type END_LOADING_TYPE = 'LoginModal/END_LOADING'

export type AUTO_LOGIN_REQUEST_TYPE = 'LoginModal/AUTO_LOGIN_REQUEST'
export type AUTO_LOGIN_SUCCESS_TYPE = 'LoginModal/AUTO_LOGIN_SUCCESS'
export type AUTO_LOGIN_FAILURE_TYPE = 'LoginModal/AUTO_LOGIN_FAILURE'

export type LOGOUT_TYPE = 'LoginModal/LOGOUT'

export type SET_AUTH_TYPE = 'LoginModal/SET_AUTH'
export type CLEAR_ERROR_TYPE = 'LoginModal/CLEAR_ERROR'

export type SET_ACCOUNT_TYPE = 'LoginModal/SET_ACCOUNT'

export type SET_REFRESH_TOKEN_TYPE = 'LoginModal/SET_REFRESH_TOKEN'

export type Action =
  | {|
      +type: SET_AUTH_TYPE | LOGIN_REQUEST_TYPE,
      username: string,
      password: string,
    |}
  | {| +type: SET_REFRESH_TOKEN_TYPE, refreshToken: string |}
  | {|
      +type: SET_ACCOUNT_TYPE,
      +account: Account,
    |}
  | {|
      +type:
        | CLEAR_ERROR_TYPE
        | LOGIN_FAILURE_TYPE
        | LOGOUT_TYPE
        | START_LOADING_TYPE
        | END_LOADING_TYPE
        | AUTO_LOGIN_REQUEST_TYPE,
    |}
