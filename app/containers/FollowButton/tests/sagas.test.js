// @flow
import { takeEvery, put } from 'redux-saga/effects'
import * as sagas from '../saga'
import * as constants from '../constants'
import * as actions from '../actions'

test('root', () => {
  const gen = sagas.default()

  let next = gen.next()
  expect(next.value).toEqual(takeEvery(constants.FOLLOW_REQUEST, sagas.follow))

  next = gen.next()
  expect(next.value).toEqual(
    takeEvery(constants.UN_FOLLOW_REQUEST, sagas.unfollow)
  )
})

test('follow success', () => {
  const gen = sagas.follow({ id: 1 })

  let next = gen.next()
  expect(next.value).toMatchSnapshot()

  next = gen.next()
  expect(next.value).toEqual(put(actions.followSuccess('public')))
})

test('follow failer', () => {
  const gen = sagas.follow({ id: 1 })

  let next = gen.next()
  expect(next.value).toMatchSnapshot()

  next = gen.throw('err')
  expect(next.value).toEqual(put(actions.followFailer('err')))
})

test('unfollow success', () => {
  const gen = sagas.unfollow({ id: 1 })

  let next = gen.next()
  expect(next.value).toMatchSnapshot()

  next = gen.next()
  expect(next.value).toEqual(put(actions.unFollowSuccess('public')))
})

test('unfollow failer', () => {
  const gen = sagas.unfollow({ id: 1 })

  let next = gen.next()
  expect(next.value).toMatchSnapshot()

  next = gen.throw('err')
  expect(next.value).toEqual(put(actions.unFollowFailer('err')))
})
