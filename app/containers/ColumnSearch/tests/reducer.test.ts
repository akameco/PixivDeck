import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

const defaultState = {
  ids: [1, 2, 3],
  nextUrl: 'dummy',
  interval: 100,
  minBookmarks: 100,
  usersIn: 0,
}

test('default action', () => {
  expect(
    reducer(initialState, {
      // @ts-ignore
      type: 'default action',
    })
  ).toMatchSnapshot()
})

test('setUsersIn', () => {
  expect(
    reducer(initialState, actions.setUsersIn('fake', 100))
  ).toMatchSnapshot()
})

test('reset ids', () => {
  expect(
    reducer(
      {
        fate: defaultState,
      },
      actions.resetIds('fate')
    )
  ).toMatchSnapshot()
})
