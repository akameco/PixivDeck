// @flow
import reducer from '../reducer'
import * as actions from '../actions'

const df = {
  open: false,
  userId: null,
}

test('default action', () => {
  // $FlowFixMe
  expect(reducer(df, { type: 'default action' })).toMatchSnapshot()
})

test('OPEN_DRAWER', () => {
  expect(reducer(df, actions.openDrawer(2))).toMatchSnapshot()
})

test('CLOSE_DRAWER', () => {
  const s = { open: true, userId: 1 }
  expect(reducer(s, actions.closeDrawer())).toMatchSnapshot()
})
