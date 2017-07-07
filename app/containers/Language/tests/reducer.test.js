// @flow
import reducer from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  // $FlowFixMe
  expect(reducer({}, { type: 'default action' })).toMatchSnapshot()
})

const ds = {
  locale: 'ja',
}

test(`changeLocale`, () => {
  expect(reducer(ds, actions.changeLocale('en'))).toMatchSnapshot()
})
