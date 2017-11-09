// @flow
export const FETCH_REQUEST: 'SearchField/FETCH_REQUEST' =
  'SearchField/FETCH_REQUEST'
export const FETCH_SUCCESS: 'SearchField/FETCH_SUCCESS' =
  'SearchField/FETCH_SUCCESS'
export const FETCH_FAILURE: 'SearchField/FETCH_FAILURE' =
  'SearchField/FETCH_FAILURE'

export const Actions = {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

export type FetchRequest = {
  type: typeof FETCH_REQUEST,
  +word: string,
}
export type FetchSuccess = {
  type: typeof FETCH_SUCCESS,
  +keywords: Array<string>,
}
export type FetchFailure = {
  type: typeof FETCH_FAILURE,
  +error: string,
}

export type Action = FetchRequest | FetchSuccess | FetchFailure
