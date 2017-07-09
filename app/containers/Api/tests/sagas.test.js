// @flow
import { call } from 'redux-saga/effects'
import * as api from 'services/api'
import * as sagas from '../sagas'
import { getToken } from 'containers/LoginModal/saga'

test('post', () => {
  const gen = sagas.post('endpoint', { dummy: 1 })

  let next = gen.next()
  expect(next.value).toEqual(call(getToken))

  const token = 'fake token'
  next = gen.next(token)
  expect(next.value).toEqual(
    call(api.postRequest, 'endpoint', { dummy: 1 }, token)
  )
})
