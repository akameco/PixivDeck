// @flow
import type { ColumnId } from './reducer'

import {
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
} from './actionTypes'
import type {
  AddColumnRequest,
  AddColumnSuccess,
  AddColumnFailure,
  FetchRequest,
  FetchSuccess,
  FetchFailure,
  FetchNextRequest,
  FetchNextSuccess,
  FetchNextFailure,
  SetNextUrl,
  RemoveItem,
} from './actionTypes'

export function addColumnRequest(id: ColumnId): AddColumnRequest {
  return {
    type: ADD_COLUMN_REQUEST,
    id,
  }
}
export function addColumnSuccess(id: ColumnId): AddColumnSuccess {
  return {
    type: ADD_COLUMN_SUCCESS,
    id,
  }
}
export function addColumnFailure(): AddColumnFailure {
  return {
    type: ADD_COLUMN_FAILURE,
  }
}
export function fetchRequest(id: ColumnId): FetchRequest {
  return {
    type: FETCH_REQUEST,
    id,
  }
}
export function fetchSuccess(id: ColumnId, ids: number[]): FetchSuccess {
  return {
    type: FETCH_SUCCESS,
    id,
    ids,
  }
}
export function fetchFailure(id: ColumnId, error: string): FetchFailure {
  return {
    type: FETCH_FAILURE,
    id,
    error,
  }
}
export function fetchNextRequest(id: ColumnId): FetchNextRequest {
  return {
    type: FETCH_NEXT_REQUEST,
    id,
  }
}
export function fetchNextSuccess(
  id: ColumnId,
  ids: number[]
): FetchNextSuccess {
  return {
    type: FETCH_NEXT_SUCCESS,
    id,
    ids,
  }
}
export function fetchNextFailure(id: ColumnId): FetchNextFailure {
  return {
    type: FETCH_NEXT_FAILURE,
    id,
  }
}
export function setNextUrl(id: ColumnId, nextUrl: string): SetNextUrl {
  return {
    type: SET_NEXT_URL,
    id,
    nextUrl,
  }
}
export function removeItem(id: 'public', item: number): RemoveItem {
  return {
    type: REMOVE_ITEM,
    id,
    item,
  }
}
