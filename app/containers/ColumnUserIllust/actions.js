// @flow
import type { Response } from '../../api/schema'
import type { Action } from './actionTypes.js'
import {
  ADD_USER_ILLUST_COLUMN,
  ADD_USER_ILLUST_COLUMN_SUCCESS,
  FETCH_USER_ILLUST,
  FETCH_USER_ILLUST_FAILRE,
  FETCH_NEXT_USER_ILLUST,
  FETCH_NEXT_USER_ILLUST_FAILRE,
  SET_NEXT_URL,
  FETCH_USER_ILLUST_SUCCESS,
  FETCH_NEXT_USER_ILLUST_SUCCESS,
} from './constants'
import type { ColumnId } from './reducer'

export function addUserIllustColumn(id: ColumnId): Action {
  return {
    type: ADD_USER_ILLUST_COLUMN,
    id,
  }
}

export function addUserIllustColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_USER_ILLUST_COLUMN_SUCCESS,
    id,
  }
}

export function fetchUserIllust(id: ColumnId): Action {
  return {
    type: FETCH_USER_ILLUST,
    id,
  }
}

export function fetchUserIllustFailre(id: ColumnId): Action {
  return {
    type: FETCH_USER_ILLUST_FAILRE,
    id,
  }
}

export function fetchNextUserIllust(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_USER_ILLUST,
    id,
  }
}

export function fetchNextUserIllustFailre(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_USER_ILLUST_FAILRE,
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

export function fetchUserIllustSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_USER_ILLUST_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNextUserIllustSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_NEXT_USER_ILLUST_SUCCESS,
    id,
    response,
    ids,
  }
}
