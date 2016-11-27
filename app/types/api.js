// @flow

export type ApiAction =
	| {|type: 'LOGIN_SUCCESS'|}
	| {|type: 'RECIEVE_ILLUSTS', id: number, illusts: Array<number>|}
	| {|type: 'SUCCESS_API_REQUEST', response: Object|}
;
