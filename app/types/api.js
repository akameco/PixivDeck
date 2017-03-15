// @flow
export type ApiAction =
  | {|type: 'RECIEVE_ILLUSTS', id: Id, illusts: Array<number>|}
  | {|type: 'API_REQUEST_SUCCESS', response: Object|}
  | {|type: 'FOLLOW', id: Id|}
  | {|type: 'UN_FOLLOW', id: Id|};
