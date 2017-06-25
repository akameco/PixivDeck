// @flow
import { ipcRenderer } from 'electron'
import type { Store, Dispatch } from 'types'

export default (store: Store) => {
  const dispatch: Dispatch = store.dispatch
  const saveState = () => {
    const { LoginModal, manage, columns, filter, config } = store.getState()
    const json = { LoginModal, manage, columns, filter, config }
    localStorage.setItem('store', JSON.stringify(json))
  }

  // 終了時に状態を保存
  // $FlowFixMe
  ipcRenderer.on('save', () => {
    dispatch({ type: 'INIT' })
    saveState()
  })

  // リロード時に状態を保存
  window.addEventListener(
    'beforeunload',
    () => {
      dispatch({ type: 'INIT' })
      saveState()
    },
    false
  )
}
