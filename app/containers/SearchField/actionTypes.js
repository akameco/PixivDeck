// @flow
export type ADD_COLUMN_SEARCH_ILLUST_TYPE = 'ADD_COLUMN_SEARCH_ILLUST'
export type CLOSE_SEARCH_FIELD_TYPE = 'CLOSE_SEARCH_FIELD'

export type Action =
  | {| +type: ADD_COLUMN_SEARCH_ILLUST_TYPE, +word: string |}
  | {| +type: CLOSE_SEARCH_FIELD_TYPE |}
