// @flow
export type Auth = {
	username: Username,
	password: Password,
	isLoginFailure: bool,
	isLoading: bool
};

export type AuthAction =
	| {|type: 'INIT'|}
	| {|type: 'LOGIN_SUCCESS'|}
	| {|type: 'LOGIN_REQUEST', username: Username, password: Password|}
	| {|type: 'SET_AUTH', username: Username, password: Password|}
	| {|type: 'AUTH_SENDING_REQUEST', sending: bool|}
	| {|type: 'LOGIN_FAILURE'|}
	| {|type: 'LOGOUT'|}
	| {|type: 'CLEAR_ERROR'|}
	| {|type: 'AUTO_LOGIN'|}
;
