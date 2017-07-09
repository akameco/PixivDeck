// @flow
import reducer from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: 'default action' })).toMatchSnapshot()
})

test('ADD_COLUMN_SUCCESS', () => {
  expect(
    reducer({}, actions.addColumnSuccess('day_male_r18'))
  ).toMatchSnapshot()
})

test('SET_NEXT_URL', () => {
  expect(
    reducer({}, actions.setNextUrl('day_r18', 'https://nextUrl1'))
  ).toMatchSnapshot()
  expect(
    reducer({}, actions.setNextUrl('day_r18', 'https://nextUrl/2'))
  ).toMatchSnapshot()
})
