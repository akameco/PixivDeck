// @flow
import * as actions from '../actions'

test('addNotify', () => {
  expect(actions.addNotify()).toMatchSnapshot()
})

test('addNotifyWithIllust', () => {
  expect(actions.addNotifyWithIllust('new illust', 1)).toMatchSnapshot()
})
