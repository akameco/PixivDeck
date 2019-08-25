import { takeEvery } from 'redux-saga/effects'
import * as sagas from '../saga'
import * as constants from '../constants'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery(constants.ADD_NOTIFY_WITH_ILLUST, sagas.notifyWithIllust)
  )
})
