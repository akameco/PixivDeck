import { call } from 'redux-saga/effects'
import { fetchAuth } from 'services/api'
import * as sagas from '../saga'

test('getToken', () => {
  const gen = sagas.getToken()
  let next = gen.next()
  expect(next.value).toMatchSnapshot()
  const fakeUserInfo = {
    username: 'fake-username',
    password: 'fake-pass',
  }
  next = gen.next(fakeUserInfo)
  expect(next.value).toStrictEqual(call(fetchAuth, fakeUserInfo))
  expect(gen.return('fake-token')).toMatchSnapshot()
})
