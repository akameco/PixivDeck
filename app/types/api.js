// @flow
type Id = number

export type ApiAction =
  | {| type: 'RECIEVE_ILLUSTS', id: Id, illusts: Array<number> |}
  | {| type: 'API_REQUEST_SUCCESS', response: Object |}
