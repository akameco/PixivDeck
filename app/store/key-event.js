// @flow
import type { Store, Dispatch } from 'types'
import { closeModal } from '../containers/ModalManeger/actions'

export default (store: Store) => {
  const dispatch: Dispatch = store.dispatch
  // エスケープキーで削除
  document.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch({ type: 'CLOSE_ALL' })
        dispatch(closeModal())
      }
    },
    false,
  )
}
