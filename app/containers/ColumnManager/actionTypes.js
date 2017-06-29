// @flow
import type { ColumnManagerId, ColumnManager } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnManager/addColumn'

export type Action = {
  +type: ADD_COLUMN_TYPE,
  +id: ColumnManagerId,
  +maneger: ColumnManager,
}
