// @flow
import { Actions, type Action } from './actionTypes'

export type ModalType = 'AddColumn' | 'Setting' | 'Login'

const defaultModal = 'Login'

export type State = {
  open: boolean,
  type: ModalType,
}

const initialState: State = {
  open: true,
  type: defaultModal,
}

function modalManeger(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return { ...state, open: true, type: action.modal }
    case Actions.CLOSE_MODAL:
      return { ...state, open: false }
    default:
      return state
  }
}

export default modalManeger
