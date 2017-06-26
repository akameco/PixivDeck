// @flow
export type CLOSE_TYPE = 'ColumnContainer/close'

export type Action = {|
  +type: CLOSE_TYPE,
  +id: number,
|}

// import {
//   fetchColumn,
//   closeColumn,
//   nextColumnPage,
//   checkColumnUpdate,
// } from 'actions'
