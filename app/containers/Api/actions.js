// @flow
import type { Response } from 'services/api'
import type { Action } from './actionTypes'
import { API_REQUEST_SUCCESS } from './constants'

export function apiRequestSuccess(response: Response): Action {
  return {
    type: API_REQUEST_SUCCESS,
    response,
  }
}
