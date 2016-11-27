// @flow
type Username = string;
type Password = string;

export type Auth = {
	username: Username,
	password: Password
};

export type Action =
	| {type: 'SAVE_LOGIN_INFO', username: Username, password: Password}
	| {type: 'INIT'}
;
