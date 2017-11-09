// @flow
import type { ModalType } from './reducer'

import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes'
import type { OpenModal, CloseModal } from './actionTypes'

export function openModal(modal: ModalType): OpenModal {
  return {
    type: OPEN_MODAL,
    modal,
  }
}
export function closeModal(): CloseModal {
  return {
    type: CLOSE_MODAL,
  }
}
