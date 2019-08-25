import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from 'containers/Api/sagas'
import * as sagas from '../saga'
import * as constants from '../constants'
import * as actions from '../actions'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()
  expect(next.value).toStrictEqual(
    takeLatest(constants.FETCH_REQUEST, sagas.autocomplete)
  )
})

test('autocomplete', () => {
  const gen = sagas.autocomplete({
    word: 'fate',
  })
  let next = gen.next()
  expect(next.value).toStrictEqual(
    call(api.get, '/v1/search/autocomplete?word=fate', true)
  )
  next = gen.next({
    result: {
      searchAutoCompleteKeywords: ['fate', 'fgo'],
    },
  })
  expect(next.value).toStrictEqual(put(actions.fetchSuccess(['fate', 'fgo'])))
})

test('autocomplete failre', () => {
  const gen = sagas.autocomplete({
    word: 'fate',
  })
  let next = gen.next()
  expect(next.value).toStrictEqual(
    call(api.get, '/v1/search/autocomplete?word=fate', true)
  )
  next = gen.throw('error')
  expect(next.value).toStrictEqual(put(actions.fetchFailre('error')))
})
