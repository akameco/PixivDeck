// @flow
import { takeEvery, take, call } from 'redux-saga/effects'
import * as sagas from '../saga'
import * as constants from '../constants'

test('root', () => {
  const gen = sagas.default()
  expect(gen.next().value).toEqual(
    takeEvery(constants.ADD_COLUMN, sagas.addColumn)
  )
  expect(gen.next().value).toEqual(takeEvery(constants.FETCH, sagas.fetch))
  expect(gen.next().value).toMatchSnapshot()
})

test('watchNewIllust', () => {
  const gen = sagas.watchNewIllust()
  expect(gen.next().value).toEqual(take(constants.START_WATCH))
  expect(gen.next({ id: 1 }).value).toMatchSnapshot()
  expect(gen.next().value).toMatchSnapshot()
  // $FlowFixMe
  expect(gen.next().value).toEqual(call(sagas.fetchNew, { id: 1 }))
})
