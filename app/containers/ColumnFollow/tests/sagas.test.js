// @flow
import { takeEvery } from 'redux-saga/effects'
import * as sagas from '../saga'
import * as constants from '../constants'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()

  expect(next.value).toEqual(
    takeEvery(constants.ADD_FOLLOW_COLUMN, sagas.addFollowColumn)
  )
})
