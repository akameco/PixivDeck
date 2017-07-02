// @flow
import type { Action } from './actionTypes.js'
import {
  ADD_RANKING_R18_COLUMN_SUCCESS,
  FETCH_NEXT_RANKING_R18,
  FETCH_NEXT_RANKING_R18_FAILRE,
  FETCH_RANKING_R18,
  FETCH_RANKING_R18_FAILRE,
  ADD_RANKING_R18_COLUMN,
  SET_NEXT_URL,
  FETCH_RANKING_R18_SUCCESS,
  FETCH_NEXT_RANKING_R18_SUCCESS,
} from './constants'
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export function addRankingR18ColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_RANKING_R18_COLUMN_SUCCESS,
    id,
  }
}

export function fetchNextRankingR18(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_RANKING_R18,
    id,
  }
}

export function fetchNextRankingR18Failre(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_RANKING_R18_FAILRE,
    id,
  }
}

export function fetchRankingR18(id: ColumnId): Action {
  return {
    type: FETCH_RANKING_R18,
    id,
  }
}

export function fetchRankingR18Failre(id: ColumnId): Action {
  return {
    type: FETCH_RANKING_R18_FAILRE,
    id,
  }
}

export function addRankingR18Column(mode: ColumnId): Action {
  return {
    type: ADD_RANKING_R18_COLUMN,
    mode,
  }
}

export function setNextUrl(id: ColumnId, nextUrl: string): Action {
  return {
    type: SET_NEXT_URL,
    id,
    nextUrl,
  }
}

export function fetchRankingR18Success(
  id: ColumnId,
  response: Response,
  ids: Array<number>
): Action {
  return {
    type: FETCH_RANKING_R18_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNextRankingR18Success(
  id: ColumnId,
  response: Response,
  ids: Array<number>
): Action {
  return {
    type: FETCH_NEXT_RANKING_R18_SUCCESS,
    id,
    response,
    ids,
  }
}
