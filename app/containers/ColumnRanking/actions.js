// @flow
import type { ColumnId } from '../ColumnManager/reducer'
import type { Response } from '../../api/schema'
import type { Action } from './actionTypes.js'
import {
  ADD_RANKING_COLUMN,
  ADD_RANKING_COLUMN_SUCCESS,
  FETCH_RANKING,
  FETCH_RANKING_FAILRE,
  SET_NEXT_URL,
  FETCH_RANKING_SUCCESS,
} from './constants'
import type { Mode } from './reducer'

export function addRankingColumn(mode: Mode): Action {
  return {
    type: ADD_RANKING_COLUMN,
    mode,
  }
}

export function addRankingColumnSuccess(
  id: ColumnId,
  mode: Mode,
  title: string
): Action {
  return {
    type: ADD_RANKING_COLUMN_SUCCESS,
    id,
    mode,
    title,
  }
}

export function fetchRanking(id: ColumnId): Action {
  return {
    type: FETCH_RANKING,
    id,
  }
}

export function fetchRankingFailre(id: ColumnId): Action {
  return {
    type: FETCH_RANKING_FAILRE,
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

export function fetchRankingSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_RANKING_SUCCESS,
    id,
    response,
    ids,
  }
}
