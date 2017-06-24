// @flow
import type { ModalType } from './reducer'
export type OPEN_MODAL_TYPE = 'ModalManager/open'
export type CLOSE_MODAL_TYPE = 'ModalManager/close'

export type Action =
  | {| +type: OPEN_MODAL_TYPE, +modal: ModalType |}
  | {| +type: CLOSE_MODAL_TYPE |}
