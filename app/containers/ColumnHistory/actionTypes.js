// @flow
export type ADD_HISTORY_TYPE = 'ColumnHistory/ADD_HISTORY'
export type ADD_COLUMN_HISTORY_TYPE = 'ColumnHistory/ADD_COLUMN_HISTORY'

export type Action =
  | {|
      +type: ADD_HISTORY_TYPE,
      +id: number,
    |}
  | {| +type: ADD_COLUMN_HISTORY_TYPE |}
