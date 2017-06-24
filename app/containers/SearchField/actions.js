// @flow
import type { Action } from './actionTypes.js'
import { ADD_COLUMN_SEARCH_ILLUST } from './constants'

export function addColumnSearchIllust(word: string): Action {
  return {
    type: ADD_COLUMN_SEARCH_ILLUST,
    word,
  }
}
