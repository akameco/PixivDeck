import { baseReducer as reducer } from './reducer'

const baseActions = {
  ADD_COLUMN_SUCCESS: 'ADD_COLUMN_SUCCESS',
  SET_NEXT_URL: 'SET_NEXT_URL',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_NEXT_SUCCESS: 'FETCH_NEXT_SUCCESS',
  FETCH_NEW_SUCCESS: 'FETCH_NEW_SUCCESS',
}

const state = {
  a: {
    ids: [],
    nextUrl: 'before',
  },
}

test('default action', () => {
  expect(
    reducer(
      'base',
      baseActions,
      {},
      {
        type: 'default action',
      }
    )
  ).toMatchSnapshot()
})

test('SET_NEXT_URL', () => {
  expect(
    reducer('base', baseActions, state, {
      type: 'SET_NEXT_URL',
      id: 'a',
      nextUrl: 'next-url',
    })
  ).toMatchSnapshot()
})

test('ADD_COLUMN_SUCCESS', () => {
  expect(
    reducer('base', baseActions, state, {
      type: 'ADD_COLUMN_SUCCESS',
      id: 'b',
    })
  ).toMatchSnapshot()
})

test('FETCH_SUCCESS', () => {
  expect(
    reducer('base', baseActions, state, {
      type: 'FETCH_SUCCESS',
      id: 'a',
      ids: [1, 2, 3],
    })
  ).toMatchSnapshot()
})

test('FETCH_NEXT_SUCCESS', () => {
  expect(
    reducer('base', baseActions, state, {
      type: 'FETCH_NEXT_SUCCESS',
      id: 'a',
      ids: [4, 5, 6],
    })
  ).toMatchSnapshot()
})

test('FETCH_NEW_SUCCESS', () => {
  expect(
    reducer('base', baseActions, state, {
      type: 'FETCH_NEW_SUCCESS',
      id: 'a',
      ids: [7, 8, 9],
    })
  ).toMatchSnapshot()
})
