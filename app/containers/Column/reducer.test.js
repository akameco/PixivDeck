// @flow
import { baseReducer as reducer } from './reducer'

const baseActions = {
  ADD_COLUMN_SUCCESS: 'ADD_COLUMN_SUCCESS',
  SET_NEXT_URL: 'SET_NEXT_URL',
}

const state = {
  a: {
    illustIds: [],
    nextUrl: 'before',
  },
}

test('default action', () => {
  expect(reducer(baseActions, {}, { type: 'default action' })).toMatchSnapshot()
})

test('SET_NEXT_URL', () => {
  expect(
    reducer(baseActions, state, {
      type: 'SET_NEXT_URL',
      id: 'a',
      nextUrl: 'next-url',
    })
  ).toMatchSnapshot()
})

test('ADD_COLUMN_SUCCESS', () => {
  expect(
    reducer(baseActions, state, {
      type: 'ADD_COLUMN_SUCCESS',
      id: 'b',
    })
  ).toMatchSnapshot()
})
