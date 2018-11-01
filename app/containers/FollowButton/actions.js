// @flow
import type { Action } from './actionTypes'
import {
  FOLLOW_REQUEST,
  UN_FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  UN_FOLLOW_SUCCESS,
  FOLLOW_FAILER,
  UN_FOLLOW_FAILER,
} from './constants'

export function followRequest(
  id: number,
  restrict: 'public' | 'private'
): Action {
  return {
    type: FOLLOW_REQUEST,
    id,
    restrict,
  }
}

export function unFollowRequest(
  id: number,
  restrict: 'public' | 'private'
): Action {
  return {
    type: UN_FOLLOW_REQUEST,
    id,
    restrict,
  }
}

export function followSuccess(restrict: 'public' | 'private'): Action {
  return {
    type: FOLLOW_SUCCESS,
    restrict,
  }
}

export function unFollowSuccess(restrict: 'public' | 'private'): Action {
  return {
    type: UN_FOLLOW_SUCCESS,
    restrict,
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
