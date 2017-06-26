// @flow
import type { Store } from 'types'
import keyEvent from './key-event'

export default (store: Store) => {
  const wrappers = [keyEvent]

  wrappers.forEach(wrap => {
    wrap(store)
  })
}
