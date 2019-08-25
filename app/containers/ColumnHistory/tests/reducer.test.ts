import reducer from '../reducer'
import * as actions from '../actions'

const ds = {
  illustIds: [],
}

test('default action', () => {
  // @ts-ignore
  expect(reducer(ds, 'default action')).toMatchSnapshot()
})

test('ADD_HISTORY', () => {
  const first = reducer(ds, actions.addHistory(1))
  expect(first).toMatchSnapshot()
  const secound = reducer(first, actions.addHistory(2))
  expect(secound).toMatchSnapshot()
  const therd = reducer(secound, actions.addHistory(1))
  expect(therd.illustIds).toStrictEqual([1, 2])
})
