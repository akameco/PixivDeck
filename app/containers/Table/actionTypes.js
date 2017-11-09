// @flow
export const ADD_TABLE: 'Table/ADD_TABLE' = 'Table/ADD_TABLE'
export const REMOVE_TABLE: 'Table/REMOVE_TABLE' = 'Table/REMOVE_TABLE'
export const SET_TABLE: 'Table/SET_TABLE' = 'Table/SET_TABLE'

export const Actions = {
  ADD_TABLE,
  REMOVE_TABLE,
  SET_TABLE,
}

export type AddTable = {
  type: typeof ADD_TABLE,
  id: string,
}
export type RemoveTable = {
  type: typeof REMOVE_TABLE,
  id: string,
}
export type SetTable = {
  type: typeof SET_TABLE,
  +ids: Array<string>,
}

export type Action = AddTable | RemoveTable | SetTable
