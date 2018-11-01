// @flow
import reducer from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  // $FlowFixMe
  expect(reducer({}, { type: 'default action' })).toMatchSnapshot()
})

test('ADD_FOLLOW_COLUMN_SUCCESS', () => {
  // expect(reducer({}, actions.addColumnSuccess('public')))
  expect(reducer({}, actions.addColumnSuccess('private'))).toMatchSnapshot()
})

test('SET_NEXT_URL', () => {
  expect(
    reducer({}, actions.setNextUrl('public', 'https://nextUrl1'))
  ).toMatchSnapshot()
  expect(
    reducer({}, actions.setNextUrl('public', 'https://nextUrl/2'))
  ).toMatchSnapshot()
  expect(
    reducer({}, actions.setNextUrl('private', 'https://nextUrl/3'))
  ).toMatchSnapshot()
})

test('FETCH_SUCCESS', () => {
  const first = reducer({}, actions.fetchSuccess('public', [1, 2, 3]))
  expect(first).toMatchSnapshot()
  expect(
    reducer(first, actions.fetchSuccess('public', [4, 5]))
  ).toMatchSnapshot()
})

test('FETCH_NEXT_SUCCESS, FETCH_NEW_SUCCESS', () => {
  const first = reducer({}, actions.fetchNextSuccess('private', [1, 2, 3]))
  expect(first).toMatchSnapshot()
  expect(
    reducer(first, actions.fetchNextSuccess('private', [4, 5]))
  ).toMatchSnapshot()

  expect(
    reducer(first, actions.fetchNewSuccess('private', [8]))
  ).toMatchSnapshot()
})
