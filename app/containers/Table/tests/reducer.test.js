// @flow
import reducer from '../reducer'
import * as actions from '../actions'

const df = {
  ids: [],
  nextIds: [],
}

test('default action', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: 'default action' })).toMatchSnapshot()
})

test('ADD_TABLE', () => {
  const f = reducer(df, actions.addTable('history'))
  expect(f).toMatchSnapshot()
  expect(reducer(f, actions.addTable('search-fate'))).toMatchSnapshot()
})

test('REMOVE_TABLE', () => {
  const f = reducer(df, actions.addTable('history'))
  expect(reducer(f, actions.removeTable('history'))).toMatchSnapshot()
})

test('SET_TABLE', () => {
  expect(
    reducer(df, actions.setTable(['history', 'search-fate']))
  ).toMatchSnapshot()
})
