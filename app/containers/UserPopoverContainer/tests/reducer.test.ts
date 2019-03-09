import reducer from '../reducer'
import * as actions from '../actions'

const df = {
  illusts: [],
}

test('default action', () => {
  expect(
    reducer(df, {
      // @ts-ignore
      type: 'default action',
    })
  ).toMatchSnapshot()
})

test('POPOVER_SUCCESS', () => {
  expect(reducer(df, actions.popoverSuccess([1, 2, 3]))).toMatchSnapshot()
})

test('CLEAR', () => {
  const s = {
    illusts: [1, 2, 3],
  }
  expect(reducer(s, actions.clear())).toMatchSnapshot()
})
