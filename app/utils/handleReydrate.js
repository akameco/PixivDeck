// @flow
// $FlowFixMe
import { REHYDRATE } from 'redux-persist/constants'

const defaultState = {
  ids: [],
  nextUrl: null,
}

type Action = { +type: string }

export function handleRehydrate<T>(
  state: T,
  action: $Subtype<Action>,
  key: string
): T {
  if (action.type !== REHYDRATE) {
    return state
  }

  const oldState = action.payload[key]

  if (oldState) {
    const newState = Object.keys(oldState).reduce((acc, id) => {
      acc[id] = { ...oldState[id], ...defaultState }
      return acc
    }, {})

    // $FlowFixMe
    return newState
  }

  return state
}
