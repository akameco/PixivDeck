// @flow
import * as manegerActions from 'containers/DrawerManager/actions'
import reducer, { initialState as ds } from '../reducer'
import * as actions from '../actions'

test('default action', () => {
  // $FlowFixMe
  expect(reducer(ds, { type: 'default action' })).toMatchSnapshot()
})

test('CLOSE_DRAWER', () => {
  expect(reducer(ds, manegerActions.closeDrawer())).toMatchSnapshot()
})

test('ADD_DRAWER_USER', () => {
  // $FlowFixMe
  expect(reducer(ds, actions.addDrawerUser({ id: 123 }))).toMatchSnapshot()
})

test('ADD_DRAWER_PROFILE', () => {
  expect(
    // $FlowFixMe
    reducer(ds, actions.addDrawerProfile({ mock: 'mock' }))
  ).toMatchSnapshot()
})

test('Actions', () => {
  expect(actions.fetchIllustSuccess([1, 2, 3])).toMatchSnapshot()
})
