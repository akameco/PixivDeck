// @flow
import reducer from '../reducer'
import * as actions from '../actions'

const initialState = {}

const response = { result: {}, entities: {} }

test('snapshot initialState', () => {
  // $FlowFixMe
  expect(reducer(initialState, { type: 'default action' })).toMatchSnapshot()
})

test('ADD_BOOKMARK_COLUMN_SUCCESS', () => {
  expect(
    reducer(initialState, actions.addColumnSuccess('public'))
  ).toMatchSnapshot()
})

test('SET_NEXT_URL', () => {
  expect(
    reducer(initialState, actions.setNextUrl('public', 'https://next.api.url'))
  ).toMatchSnapshot()
  expect(
    reducer(initialState, actions.setNextUrl('private', 'https://next.api.url'))
  ).toMatchSnapshot()
})

test('FETCH_SUCCESS', () => {
  expect(
    reducer(initialState, actions.fetchSuccess('public', response, [1, 2, 3]))
  ).toMatchSnapshot()
  expect(
    reducer(
      initialState,
      actions.fetchNextSuccess('private', response, [1, 2, 3])
    )
  ).toMatchSnapshot()
})
