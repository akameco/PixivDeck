// @flow
import { call, put } from 'redux-saga/effects'
import * as api from 'services/api'
import * as sagas from '../sagas'
import * as actions from '../actions'
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

test('get', () => {
  const gen = sagas.get('endpoint', true)

  let next = gen.next()
  expect(next.value).toEqual(call(getToken))

  const token = 'fake token'
  next = gen.next(token)
  expect(next.value).toEqual(call(api.getRequest, 'endpoint', {}, token))

  next = gen.next({ entities: {}, result: {} })
  expect(next.value).toEqual(
    // $FlowFixMe
    put(actions.apiRequestSuccess({ entities: {}, result: {} }))
  )
})
