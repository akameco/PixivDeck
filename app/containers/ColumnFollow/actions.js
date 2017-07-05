// @flow
import type { Action } from './actionTypes.js'
import {
  ADD_FOLLOW_COLUMN,
  ADD_FOLLOW_COLUMN_SUCCESS,
  FETCH_FOLLOW,
  FETCH_FOLLOW_FAILRE,
  FETCH_NEW,
  FETCH_NEXT_FOLLOW,
  FETCH_NEXT_FOLLOW_FAILRE,
  SET_NEXT_URL,
  FETCH_FOLLOW_SUCCESS,
  FETCH_NEXT_FOLLOW_SUCCESS,
  FETCH_NEW_SUCCESS,
  FETCH_NEW_FAILRE,
} from './constants'
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export function addFollowColumn(id: ColumnId): Action {
  return {
    type: ADD_FOLLOW_COLUMN,
    id,
  }
}

export function addFollowColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_FOLLOW_COLUMN_SUCCESS,
    id,
  }
}

export function fetchFollow(id: ColumnId): Action {
  return {
    type: FETCH_FOLLOW,
    id,
  }
}

export function fetchFollowFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_FOLLOW_FAILRE,
    id,
    error,
  }
}

export function fetchNew(id: ColumnId): Action {
  return {
    type: FETCH_NEW,
    id,
  }
}

export function fetchNextFollow(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_FOLLOW,
    id,
  }
}

export function fetchNextFollowFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_NEXT_FOLLOW_FAILRE,
    id,
    error,
  }
}

export function setNextUrl(id: ColumnId, nextUrl: string): Action {
  return {
    type: SET_NEXT_URL,
    id,
    nextUrl,
  }
}

export function fetchFollowSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<number>
): Action {
  return {
    type: FETCH_FOLLOW_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNextFollowSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<number>
): Action {
  return {
    type: FETCH_NEXT_FOLLOW_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNewSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<number>
): Action {
  return {
    type: FETCH_NEW_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNewFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_NEW_FAILRE,
    id,
    error,
  }
}
