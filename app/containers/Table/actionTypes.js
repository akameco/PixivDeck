// @flow
export type ADD_TYPE = 'Table/ADD'
export type REMOVE_TYPE = 'Table/REMOVE'

export type Action = {|
  +type: ADD_TYPE | REMOVE_TYPE,
  +id: string,
|}
