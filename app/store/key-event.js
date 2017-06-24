// @flow
import type { Store, Dispatch } from 'types'
import { closeModal } from '../containers/ModalManeger/actions'
import {
  closeSearchField,
  closeDropdown,
} from '../containers/HeaderContainer/actions'

function closeHandler(dispatch: Dispatch) {
  dispatch({ type: 'CLOSE_ALL' })
  dispatch(closeModal())
  dispatch(closeSearchField())
  dispatch(closeDropdown())
}

export default (store: Store) => {
  const dispatch = store.dispatch
  // エスケープキーで削除
  document.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler(dispatch)
      }
    },
    false
  )
}
