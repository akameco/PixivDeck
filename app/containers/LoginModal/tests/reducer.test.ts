import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  expect(
    reducer(undefined, {
      // @ts-ignore
      type: 'default action',
    })
  ).toMatchSnapshot()
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

test('SET_ACCOUNT', () => {
  const account = {
    id: '19785907',
    name: 'akameco',
    account: 'akameco',
    mailAddress: 'fake@fake.com',
    isPremium: false,
    xRestrict: 2,
    isMailAuthorized: true,
    profileImageUrls: {
      px16x16: 'imgurl',
      px50x50: 'imgurl',
      px170x170: 'imgurl',
    },
  }
  expect(reducer(initialState, actions.setAccount(account))).toMatchSnapshot()
})
