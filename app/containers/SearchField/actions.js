// @flow
import type { Action } from './actionTypes.js'
import { ADD_COLUMN_SEARCH_ILLUST, CLOSE_SEARCH_FIELD } from './constants'

export function addColumnSearchIllust(word: string): Action {
  return {
    type: ADD_COLUMN_SEARCH_ILLUST,
    word,
  }
}

export function closeSearchField(): Action {
  return {
    type: CLOSE_SEARCH_FIELD,
  }
}
