// @flow
import { call } from 'redux-saga/effects'
import * as sagas from '../saga'
import { fetchAuth } from 'services/api'

test('getToken', () => {
  const gen = sagas.getToken()

  let next = gen.next()
  expect(next.value).toMatchSnapshot()

  const fakeUserInfo = { username: 'fake-username', password: 'fake-pass' }
  next = gen.next(fakeUserInfo)
  expect(next.value).toEqual(call(fetchAuth, fakeUserInfo))

  expect(gen.return('fake-token')).toMatchSnapshot()
})
