// @flow
export type ADD_TYPE = 'Table/add'

export type Action = {|
  +type: ADD_TYPE,
  +name: string,
|}
