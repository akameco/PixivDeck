// @flow
import type { ModalType } from './reducer'

export const OPEN_MODAL: 'ModalManeger/OPEN_MODAL' = 'ModalManeger/OPEN_MODAL'
export const CLOSE_MODAL: 'ModalManeger/CLOSE_MODAL' =
  'ModalManeger/CLOSE_MODAL'

export const Actions = {
  OPEN_MODAL,
  CLOSE_MODAL,
}

export type OpenModal = {
  type: typeof OPEN_MODAL,
  modal: ModalType,
}
export type CloseModal = {
  type: typeof CLOSE_MODAL,
}

export type Action = OpenModal | CloseModal
