// @flow
import type {Action} from '../types'
import * as Actions from '../constants/auth'

export const logout = (): Action => ({type: Actions.LOGOUT})
export const loginFailure = (): Action => ({type: Actions.LOGIN_FAILURE})
export const clearError = (): Action => ({type: Actions.CLEAR_ERROR})
export const autoLogin = (): Action => ({type: Actions.AUTO_LOGIN})

export const login = (username: string, password: string): Action => ({
	type: Actions.LOGIN_REQUEST,
	username,
	password,
})

export const setAuth = (username: string, password: string): Action => ({
	type: Actions.SET_AUTH,
	username,
	password,
})

export const authSending = (sending: bool): Action => ({
	type: Actions.AUTH_SENDING_REQUEST,
	sending,
})
