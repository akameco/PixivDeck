// @flow
import type { ColumnManagerId, ColumnManager } from './reducer'

export type ADD_TABLE_TYPE = 'ColumnManager/ADD_TABLE'

export type Action = {
  +type: ADD_TABLE_TYPE,
  +id: ColumnManagerId,
  +maneger: ColumnManager,
}
