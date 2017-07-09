// @flow
import type { Action } from './actionTypes.js'
import { API_REQUEST_SUCCESS } from './constants'
import type { Response } from 'services/api'

export function apiRequestSuccess(response: Response): Action {
  return {
    type: API_REQUEST_SUCCESS,
    response,
  }
}
