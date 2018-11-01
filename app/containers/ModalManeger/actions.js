// @flow
import type { Action } from './actionTypes'
import { OPEN_MODAL, CLOSE_MODAL } from './constants'
import type { ModalType } from './reducer'

export function openModal(modal: ModalType): Action {
  return {
    type: OPEN_MODAL,
    modal,
  }
}

export function closeModal(): Action {
  return {
    type: CLOSE_MODAL,
  }
}
