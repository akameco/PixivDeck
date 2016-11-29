// @flow

export type ApiAction =
	| {|type: 'RECIEVE_ILLUSTS', id: number, illusts: Array<number>|}
	| {|type: 'API_REQUEST_SUCCESS', response: Object|}
;
