import { Response } from 'services/api'

export type API_REQUEST_SUCCESS_TYPE = 'Api/API_REQUEST_SUCCESS'
export interface Action {
  type: API_REQUEST_SUCCESS_TYPE
  response: Response
}
