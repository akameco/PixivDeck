// @flow
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: 'default action' })).toMatchSnapshot()
})

test('SET_AUTH', () => {
  expect(
    reducer(initialState, actions.setAuth('hello', 'world'))
  ).toMatchSnapshot()
})

test('LOGIN_REQUEST', () => {
  expect(
    reducer(initialState, actions.loginRequest('hello', 'world')).isLoading
  ).toMatchSnapshot()
})

test('LOGIN_FAILURE', () => {
  expect(reducer(initialState, actions.loginFailure())).toMatchSnapshot()
})

test('CLEAR_ERROR', () => {
  const store = { ...initialState, isLoginFailure: true }
  expect(reducer(store, actions.clearError())).toMatchSnapshot()
})
