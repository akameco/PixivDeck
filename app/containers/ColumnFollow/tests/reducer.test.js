// @flow
import reducer from '../reducer'
import * as actions from '../actions'

const response = { result: {}, entities: {} }

test('default action', () => {
  // $FlowFixMe
  expect(reducer({}, { type: 'default action' })).toMatchSnapshot()
})

test('ADD_FOLLOW_COLUMN_SUCCESS', () => {
  expect(reducer({}, actions.addFollowColumnSuccess('public')))
  expect(
    reducer({}, actions.addFollowColumnSuccess('private'))
  ).toMatchSnapshot()
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

test('FETCH_FOLLOW_SUCCESS', () => {
  const first = reducer(
    {},
    actions.fetchFollowSuccess('public', response, [1, 2, 3])
  )
  expect(first).toMatchSnapshot()
  expect(
    reducer(first, actions.fetchFollowSuccess('public', response, [4, 5]))
  ).toMatchSnapshot()
})

test('FETCH_NEXT_FOLLOW_SUCCESS, FETCH_NEW_SUCCESS', () => {
  const first = reducer(
    {},
    actions.fetchNextFollowSuccess('private', response, [1, 2, 3])
  )
  expect(first).toMatchSnapshot()
  expect(
    reducer(first, actions.fetchNextFollowSuccess('private', response, [4, 5]))
  ).toMatchSnapshot()

  expect(
    reducer(first, actions.fetchNewSuccess('private', response, [8]))
  ).toMatchSnapshot()
})
