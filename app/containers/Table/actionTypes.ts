export type ADD_TABLE_TYPE = 'Table/ADD_TABLE'
export type REMOVE_TABLE_TYPE = 'Table/REMOVE_TABLE'
export type SET_TABLE_TYPE = 'Table/SET_TABLE_TYPE'
export type Action =
  | {
      type: ADD_TABLE_TYPE | REMOVE_TABLE_TYPE
      id: string
    }
  | {
      type: SET_TABLE_TYPE
      ids: string[]
    }
