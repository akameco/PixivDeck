// @flow
import { createSelector, createStructuredSelector } from 'reselect'
import type { State } from 'types/state'

const selectAuth = (state: State) => state.LoginModal

export const makeSelectUsername = () =>
  createSelector(
    selectAuth,
    s => s.username
  )

export const makeSelectPassword = () =>
  createSelector(
    selectAuth,
    s => s.password
  )

export const makeSelectRefreshToken = () =>
  createSelector(
    selectAuth,
    s => s.refreshToken
  )

export const makeSelectInfo = () =>
  createStructuredSelector({
    username: makeSelectUsername(),
    password: makeSelectPassword(),
    refreshToken: makeSelectRefreshToken(),
  })

export const makeSelectIsLoading = () =>
  createSelector(
    selectAuth,
    s => s.isLoading
  )

export const makeSelectIsLoginFailure = () =>
  createSelector(
    selectAuth,
    s => s.isLoginFailure
  )

const getAccount = createSelector(
  selectAuth,
  s => s.account
)

export const getMyId = createSelector(
  getAccount,
  s => (s ? s.id : null)
)
