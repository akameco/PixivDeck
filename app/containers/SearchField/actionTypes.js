// @flow
export type FETCH_REQUEST_TYPE = 'SearchField/FETCH_REQUEST'
export type FETCH_SUCCESS_TYPE = 'SearchField/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE = 'SearchField/FETCH_FAILRE'

export type Action =
  | {|
      +type: FETCH_REQUEST_TYPE,
      +word: string,
    |}
  | {|
      +type: FETCH_SUCCESS_TYPE,
      +keywords: Array<string>,
    |}
  | {|
      +type: FETCH_FAILRE_TYPE,
      +error: string,
    |}
