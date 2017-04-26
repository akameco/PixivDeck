// @flow
import type { Action } from 'types'
import type { Auth } from 'types/auth'

const initState = {
  username: '',
  password: '',
  isLoginFailure: false,
  isLoading: false,
}

export default function auth(state: Auth = initState, action: Action): Auth {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, username: action.username, password: action.password }
    case 'AUTH_SENDING_REQUEST':
      return { ...state, isLoading: action.sending }
    case 'CLEAR_ERROR':
      return { ...state, isLoginFailure: false }
    case 'LOGIN_FAILURE':
      return { ...state, isLoginFailure: true }
    default:
      return state
  }
}
