// @flow
import * as actions from '../actions'

test('addBookmarkRequest', () => {
  expect(actions.addBookmarkRequest(1, 'public')).toMatchSnapshot()
})

test('addBookmarkSuccess', () => {
  expect(actions.addBookmarkSuccess(1, 'public')).toMatchSnapshot()
})

test('addBookmarkFailer', () => {
  expect(actions.addBookmarkFailer(1, 'error')).toMatchSnapshot()
})
