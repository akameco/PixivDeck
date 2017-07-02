// @flow
import type { Action } from './actionTypes.js'
import {
  ADD_BOOKMARK_COLUMN,
  ADD_BOOKMARK_COLUMN_SUCCESS,
  FETCH_BOOKMARK,
  FETCH_BOOKMARK_FAILRE,
  FETCH_NEXT_BOOKMARK,
  FETCH_NEXT_BOOKMARK_FAILRE,
  SET_NEXT_URL,
  FETCH_BOOKMARK_SUCCESS,
  FETCH_NEXT_BOOKMARK_SUCCESS,
} from './constants'
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export function addBookmarkColumn(id: ColumnId): Action {
  return {
    type: ADD_BOOKMARK_COLUMN,
    id,
  }
}

export function addBookmarkColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_BOOKMARK_COLUMN_SUCCESS,
    id,
  }
}

export function fetchBookmark(id: ColumnId): Action {
  return {
    type: FETCH_BOOKMARK,
    id,
  }
}

export function fetchBookmarkFailre(id: ColumnId): Action {
  return {
    type: FETCH_BOOKMARK_FAILRE,
    id,
  }
}

export function fetchNextBookmark(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_BOOKMARK,
    id,
  }
}

export function fetchNextBookmarkFailre(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_BOOKMARK_FAILRE,
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

export function fetchBookmarkSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_BOOKMARK_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNextBookmarkSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_NEXT_BOOKMARK_SUCCESS,
    id,
    response,
    ids,
  }
}
