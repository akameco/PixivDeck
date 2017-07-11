// @flow
import { takeEvery } from 'redux-saga/effects'
import * as sagas from '../saga'
import * as constants from '../constants'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()
  expect(next.value).toEqual(takeEvery(constants.ADD_COLUMN, sagas.addColumn))

  // next = gen.next()
  // expect(next.value).toEqual(
  //   takeEvery(constants.FETCH, sagas.fetchUserIllust)
  // )
  //
  // next = gen.next()
  // expect(next.value).toEqual(
  //   takeEvery(constants.FETCH_NEXT, sagas.fetchNextUserIllust)
  // )
})

test('fetch next', () => {
  const gen = sagas.fetchBookmark({ id: 'public', type: constants.FETCH })
  const next = gen.next()
  expect(next.value).toMatchSnapshot()
  expect(gen.next({ nextUrl: 'fake' }).value).toMatchSnapshot()
})

test('fetch first', () => {
  const gen = sagas.fetchBookmark({ id: 'public', type: constants.FETCH })
  let next = gen.next()

  expect(next.value).toHaveProperty('SELECT')
  expect(next.value).toMatchSnapshot()

  next = gen.next({ id: '1' })
  expect(next.value).toHaveProperty('SELECT')
  expect(next.value).toMatchSnapshot()

  next = gen.next({ ids: [1, 2, 3] })
  expect(next.value).toHaveProperty('CALL')
  expect(next.value).toMatchSnapshot()
})
