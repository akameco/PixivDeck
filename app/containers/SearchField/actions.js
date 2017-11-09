// @flow
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes'
import type { FetchRequest, FetchSuccess, FetchFailure } from './actionTypes'

export function fetchRequest(word: string): FetchRequest {
  return {
    type: FETCH_REQUEST,
    word,
  }
}
export function fetchSuccess(keywords: Array<string>): FetchSuccess {
  return {
    type: FETCH_SUCCESS,
    keywords,
  }
}
export function fetchFailure(error: string): FetchFailure {
  return {
    type: FETCH_FAILURE,
    error,
  }
}
