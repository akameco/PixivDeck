// @flow
import type { Action } from './actionTypes.js'
import {
  FOLLOW_REQUEST,
  UN_FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  UN_FOLLOW_SUCCESS,
  FOLLOW_FAILER,
  UN_FOLLOW_FAILER,
} from './constants'

export function followRequest(id: number): Action {
  return {
    type: FOLLOW_REQUEST,
    id,
  }
}

export function unFollowRequest(id: number): Action {
  return {
    type: UN_FOLLOW_REQUEST,
    id,
  }
}

export function followSuccess(): Action {
  return {
    type: FOLLOW_SUCCESS,
  }
}

export function unFollowSuccess(): Action {
  return {
    type: UN_FOLLOW_SUCCESS,
  }
}

export function followFailer(error: string): Action {
  return {
    type: FOLLOW_FAILER,
    error,
  }
}

export function unFollowFailer(error: string): Action {
  return {
    type: UN_FOLLOW_FAILER,
    error,
  }
}
