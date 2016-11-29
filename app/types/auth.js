// @flow
type Username = string;
type Password = string;

export type Auth = {
	username: Username,
	password: Password,
	isLoginFailure: bool,
	isLoading: bool
};

export type AuthAction =
	| {|type: 'INIT'|}
	| {|type: 'LOGIN_REQUEST'|}
	| {|type: 'LOGIN_SUCCESS', username: Username, password: Password|}
	| {|type: 'LOGIN_FAILURE'|}
	| {|type: 'LOGOUT'|}
;
