// @flow
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  // $FlowFixMe
  expect(reducer(initialState, { type: 'default action' })).toMatchSnapshot()
})

test('ADD_COLUMN_SUCCESS', () => {
  expect(
    reducer(initialState, actions.addColumnSuccess('day'))
  ).toMatchSnapshot()
})
