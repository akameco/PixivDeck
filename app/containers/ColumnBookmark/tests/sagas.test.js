// @flow
import { takeEvery } from 'redux-saga/effects'
import { ADD_BOOKMARK_SUCCESS } from 'containers/BookmarkButton/constants'
import * as sagas from '../saga'
import * as constants from '../constants'

test('root', () => {
  const gen = sagas.default()
  let next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery(constants.ADD_COLUMN, sagas.addColumn)
  )

  next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery([constants.FETCH, constants.FETCH_NEXT], sagas.fetchBookmark)
  )

  next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery(ADD_BOOKMARK_SUCCESS, sagas.fetchNew)
  )
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

  expect(next.value).toMatchSnapshot()

  next = gen.next({ id: '1' })
  expect(next.value).toMatchSnapshot()

  next = gen.next({ ids: [1, 2, 3] })
  expect(next.value).toMatchSnapshot()
})

test('new', () => {
  const gen = sagas.fetchNew({ restrict: 'public' })
  let next = gen.next({ id: 'public' })
  expect(next.value).toMatchSnapshot()

  next = gen.next({ ids: [1, 2, 3] })
  expect(next.value).toMatchSnapshot()

  next = gen.next('myid')
  expect(next.value).toMatchSnapshot()
})
