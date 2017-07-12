// @flow
import * as effects from 'redux-saga/effects'
import * as sagas from '../saga'
import * as actions from '../actions'
import * as constants from '../constants'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()
  expect(next.value).toEqual(
    effects.takeEvery(constants.ADD_COLUMN, sagas.addColumn)
  )
})

test('usersIn', () => {
  const gen = sagas.usersIn()
  const id = 'fate'

  let next = gen.next()
  expect(next.value).toEqual(effects.take(constants.USERS_IN))

  next = gen.next({ id: 'fate1000users入り', usersIn: 100 })
  expect(next.value).toEqual(effects.put(actions.setUsersIn(id, 100)))

  next = gen.next()
  expect(next.value).toEqual(effects.put(actions.resetIds(id)))

  next = gen.next()
  expect(next.value).toEqual(effects.put(actions.setNextUrl(id, null)))

  next = gen.next()
  expect(next.value).toEqual(effects.put(actions.fetch(id)))
})
