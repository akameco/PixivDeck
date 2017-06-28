// @flow
import type { Body } from './reducer'

export type ADD_COLUMN_TYPE = 'Column2/addColumn'

export type Action = {
  +type: ADD_COLUMN_TYPE,
  +id: string,
  +body: Body,
}
