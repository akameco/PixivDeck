import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  expect(
    reducer(initialState, {
      // @ts-ignore
      type: 'default action',
    })
  ).toMatchSnapshot()
})

test('ADD_COLUMN_SUCCESS', () => {
  expect(
    reducer(initialState, actions.addColumnSuccess('day'))
  ).toMatchSnapshot()
})
