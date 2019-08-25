import { Action } from './actionTypes'
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILRE } from './constants'

export function fetchRequest(word: string): Action {
  return {
    type: FETCH_REQUEST,
    word,
  }
}
export function fetchSuccess(keywords: string[]): Action {
  return {
    type: FETCH_SUCCESS,
    keywords,
  }
}
export function fetchFailre(error: string): Action {
  return {
    type: FETCH_FAILRE,
    error,
  }
}
