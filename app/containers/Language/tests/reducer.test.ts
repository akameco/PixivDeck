import reducer from '../reducer'
import * as actions from '../actions'

const ds = {
  locale: 'ja',
}

test('default action', () => {
  expect(
    reducer(ds, {
      // @ts-ignore
      type: 'default action',
    })
  ).toMatchSnapshot()
})

test(`changeLocale`, () => {
  expect(reducer(ds, actions.changeLocale('en'))).toMatchSnapshot()
})
