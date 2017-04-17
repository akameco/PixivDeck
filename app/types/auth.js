// @flow
type Username = string;
type Password = string;

export type Auth = {
  username: Username,
  password: Password,
  isLoginFailure: boolean,
  isLoading: boolean,
};

export const LOGOUT = 'LOGOUT';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const AUTH_SENDING_REQUEST = 'AUTH_SENDING_REQUEST';
export const SET_AUTH = 'SET_AUTH';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const AUTO_LOGIN = 'AUTO_LOGIN';

export type AuthAction =
  | {|type: 'INIT'|}
  | {|type: 'LOGIN_SUCCESS'|}
  | {|type: 'LOGIN_REQUEST', username: Username, password: Password|}
  | {|type: 'SET_AUTH', username: Username, password: Password|}
  | {|type: 'AUTH_SENDING_REQUEST', sending: boolean|}
  | {|type: 'LOGIN_FAILURE'|}
  | {|type: 'LOGOUT'|}
  | {|type: 'CLEAR_ERROR'|}
  | {|type: 'AUTO_LOGIN'|};
