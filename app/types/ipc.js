// @flow

export type IpcAction =
	| {type: 'IPC_REQUEST'}
	| {type: 'LOGIN_SUCCESS'}
	| {type: 'RECIEVE_ILLUSTS', id: number, illusts: Array<number>}
	| {type: 'SUCCESS_IPC_REQUEST', response: Object}
;
