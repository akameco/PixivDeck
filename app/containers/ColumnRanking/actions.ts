import { Action } from './actionTypes'
import {
  ADD_COLUMN,
  ADD_COLUMN_SUCCESS,
  CLERE,
  FETCH,
  FETCH_FAILRE,
  WATCH_NEW,
  START_WATCH,
  SET_NEXT_URL,
  FETCH_SUCCESS,
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
export function clere(id: ColumnId): Action {
  return {
    type: CLERE,
    id,
  }
}
export function fetch(id: ColumnId): Action {
  return {
    type: FETCH,
    id,
  }
}
export function fetchFailre(id: ColumnId): Action {
  return {
    type: FETCH_FAILRE,
    id,
  }
}
export function watchNew(id: ColumnId): Action {
  return {
    type: WATCH_NEW,
    id,
  }
}
export function startWatch(id: ColumnId): Action {
  return {
    type: START_WATCH,
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
export function fetchSuccess(id: ColumnId, ids: number[]): Action {
  return {
    type: FETCH_SUCCESS,
    id,
    ids,
  }
}
