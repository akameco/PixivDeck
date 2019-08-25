import { Action } from './actionTypes'
import {
  ADD_COLUMN,
  ADD_COLUMN_SUCCESS,
  FETCH,
  FETCH_FAILRE,
  FETCH_NEXT,
  FETCH_NEXT_FAILRE,
  SET_NEXT_URL,
  REMOVE_ITEM,
  FETCH_SUCCESS,
  FETCH_NEXT_SUCCESS,
} from './constants'
import { ColumnId } from './reducer'

export function addColumn(id: ColumnId): Action {
  return {
    type: ADD_COLUMN,
    id,
  }
}
export function addColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_COLUMN_SUCCESS,
    id,
  }
}
export function fetch(id: ColumnId): Action {
  return {
    type: FETCH,
    id,
  }
}
export function fetchFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_FAILRE,
    id,
    error,
  }
}
export function fetchNext(id: ColumnId): Action {
  return {
    type: FETCH_NEXT,
    id,
  }
}
export function fetchNextFailre(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_FAILRE,
    id,
  }
}
export function setNextUrl(id: ColumnId, nextUrl: string): Action {
  return {
    type: SET_NEXT_URL,
    id,
    nextUrl,
  }
}
export function removeItem(id: 'public', item: number): Action {
  return {
    type: REMOVE_ITEM,
    id,
    item,
  }
}
export function fetchSuccess(id: ColumnId, ids: number[]): Action {
  return {
    type: FETCH_SUCCESS,
    id,
    ids,
  }
}
export function fetchNextSuccess(id: ColumnId, ids: number[]): Action {
  return {
    type: FETCH_NEXT_SUCCESS,
    id,
    ids,
  }
}
