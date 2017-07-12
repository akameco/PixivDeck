// @flow
import reducer from '../reducer'

test('default action', () => {
  // $FlowFixMe
  expect(reducer({}, { type: 'default action' })).toMatchSnapshot()
})
