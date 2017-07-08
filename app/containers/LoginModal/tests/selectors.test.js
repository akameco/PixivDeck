// @flow
import * as selectors from '../selectors'
import { initialState } from '../reducer'

const mockStore = {
  LoginModal: {
    ...initialState,
    ...{
      username: 'fakeName',
      password: 'fakePassword',
    },
  },
}

test('makeSelectInfo', () => {
  const getInfo = selectors.makeSelectInfo()
  expect(getInfo(mockStore)).toMatchSnapshot()
})

test('makeSelectIsLoginFailure', () => {
  const s = selectors.makeSelectIsLoginFailure()
  expect(s(mockStore)).toBeFalsy()
})

test('', () => {
  const s = selectors.makeSelectIsLoading()
  expect(s(mockStore)).toBeFalsy()
})
