// @flow

export type ApiAction =
	| {|type: 'RECIEVE_ILLUSTS', id: number, illusts: Array<number>|}
	| {|type: 'SUCCESS_API_REQUEST', response: Object|}
;
