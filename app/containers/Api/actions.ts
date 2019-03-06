import { Response } from 'services/api'
import { Action } from './actionTypes'
import { API_REQUEST_SUCCESS } from './constants'

export function apiRequestSuccess(response: Response): Action {
  return {
    type: API_REQUEST_SUCCESS,
    response,
  }
}
