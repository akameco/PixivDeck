// @flow
export type ADD_TABLE_TYPE = 'Table/ADD_TABLE'
export type REMOVE_TABLE_TYPE = 'Table/REMOVE_TABLE'

export type Action = {|
  +type: ADD_TABLE_TYPE | REMOVE_TABLE_TYPE,
  +id: string,
|}
