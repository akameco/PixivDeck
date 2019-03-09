import { takeEvery, put } from 'redux-saga/effects'
import * as sagas from '../saga'
import * as constants from '../constants'
import * as actions from '../actions'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery(constants.ADD_BOOKMARK_REQUEST, sagas.bookmark)
  )
})

test('bookmark', () => {
  const action = {
    id: 1,
    restrict: 'public',
  }
  const gen = sagas.bookmark(action)
  let next = gen.next()
  expect(next.value).toMatchSnapshot()
  next = gen.next()
  expect(next.value).toStrictEqual(put(actions.addBookmarkSuccess(1, 'public')))
})

test('bookmark failed', () => {
  const action = {
    id: 1,
    restrict: 'public',
  }
  const gen = sagas.bookmark(action)
  let next = gen.next()
  expect(next.value).toMatchSnapshot()
  next = gen.throw('error')
  expect(next.value).toStrictEqual(put(actions.addBookmarkFailer(1, 'error')))
})
