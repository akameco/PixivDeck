// @flow
import type { ColumnId } from './reducer'

export const ADD_COLUMN_REQUEST: 'ColumnBookmark/ADD_COLUMN_REQUEST' =
  'ColumnBookmark/ADD_COLUMN_REQUEST'
export const ADD_COLUMN_SUCCESS: 'ColumnBookmark/ADD_COLUMN_SUCCESS' =
  'ColumnBookmark/ADD_COLUMN_SUCCESS'
export const ADD_COLUMN_FAILURE: 'ColumnBookmark/ADD_COLUMN_FAILURE' =
  'ColumnBookmark/ADD_COLUMN_FAILURE'
export const FETCH_REQUEST: 'ColumnBookmark/FETCH_REQUEST' =
  'ColumnBookmark/FETCH_REQUEST'
export const FETCH_SUCCESS: 'ColumnBookmark/FETCH_SUCCESS' =
  'ColumnBookmark/FETCH_SUCCESS'
export const FETCH_FAILURE: 'ColumnBookmark/FETCH_FAILURE' =
  'ColumnBookmark/FETCH_FAILURE'
export const FETCH_NEXT_REQUEST: 'ColumnBookmark/FETCH_NEXT_REQUEST' =
  'ColumnBookmark/FETCH_NEXT_REQUEST'
export const FETCH_NEXT_SUCCESS: 'ColumnBookmark/FETCH_NEXT_SUCCESS' =
  'ColumnBookmark/FETCH_NEXT_SUCCESS'
export const FETCH_NEXT_FAILURE: 'ColumnBookmark/FETCH_NEXT_FAILURE' =
  'ColumnBookmark/FETCH_NEXT_FAILURE'
export const SET_NEXT_URL: 'ColumnBookmark/SET_NEXT_URL' =
  'ColumnBookmark/SET_NEXT_URL'
export const REMOVE_ITEM: 'ColumnBookmark/REMOVE_ITEM' =
  'ColumnBookmark/REMOVE_ITEM'

export const Actions = {
  ADD_COLUMN_REQUEST,
  ADD_COLUMN_SUCCESS,
  ADD_COLUMN_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_NEXT_REQUEST,
  FETCH_NEXT_SUCCESS,
  FETCH_NEXT_FAILURE,
  SET_NEXT_URL,
  REMOVE_ITEM,
}

export type AddColumnRequest = {
  type: typeof ADD_COLUMN_REQUEST,
  id: ColumnId,
}
export type AddColumnSuccess = {
  type: typeof ADD_COLUMN_SUCCESS,
  id: ColumnId,
}
export type AddColumnFailure = {
  type: typeof ADD_COLUMN_FAILURE,
}

export type FetchRequest = {
  type: typeof FETCH_REQUEST,
  id: ColumnId,
}
export type FetchSuccess = {
  type: typeof FETCH_SUCCESS,
  id: ColumnId,
  ids: number[],
}
export type FetchFailure = {
  type: typeof FETCH_FAILURE,
  id: ColumnId,
  error: string,
}

export type FetchNextRequest = {
  type: typeof FETCH_NEXT_REQUEST,
  id: ColumnId,
}
export type FetchNextSuccess = {
  type: typeof FETCH_NEXT_SUCCESS,
  id: ColumnId,
  ids: number[],
}
export type FetchNextFailure = {
  type: typeof FETCH_NEXT_FAILURE,
  id: ColumnId,
}

export type SetNextUrl = {
  type: typeof SET_NEXT_URL,
  id: ColumnId,
  nextUrl: string,
}

export type RemoveItem = {
  type: typeof REMOVE_ITEM,
  id: 'public',
  item: number,
}

export type Action =
  | AddColumnRequest
  | AddColumnSuccess
  | AddColumnFailure
  | FetchRequest
  | FetchSuccess
  | FetchFailure
  | FetchNextRequest
  | FetchNextSuccess
  | FetchNextFailure
  | SetNextUrl
  | RemoveItem
