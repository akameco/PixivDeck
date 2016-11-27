// @flow
type Username = string;
type Password = string;

export type Auth = {
	username: Username,
	password: Password
};

export type Action =
	| {type: 'LOGIN', username: Username, password: Password}
	| {type: 'INIT'}
;
