import reducer from '../reducer'
import * as actions from '../actions'

const initialState = {}

test('snapshot initialState', () => {
  expect(
    reducer(initialState, {
      // @ts-ignore
      type: 'default action',
    })
  ).toMatchSnapshot()
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
    reducer(initialState, actions.fetchSuccess('public', [1, 2, 3]))
  ).toMatchSnapshot()
  expect(
    reducer(initialState, actions.fetchNextSuccess('private', [1, 2, 3]))
  ).toMatchSnapshot()
})
