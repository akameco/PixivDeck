import { takeEvery, put } from 'redux-saga/effects'
import { OPEN_ILLUST_VIEWER } from 'containers/IllustPreview/constants'
import { OPEN_MANGA_PREVIEW } from 'containers/MangaPreview/constants'
import * as sagas from '../saga'
import * as Actions from '../constants'
import * as actions from '../actions'

test('root Saga', () => {
  const gen = sagas.default()
  let next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery(Actions.ADD_COLUMN_HISTORY, sagas.addHistoryColumn)
  )
  next = gen.next()
  expect(next.value).toStrictEqual(
    takeEvery([OPEN_ILLUST_VIEWER, OPEN_MANGA_PREVIEW], sagas.addHistory)
  )
})

test('add history', () => {
  const gen = sagas.addHistory({
    id: 1,
  })
  const next = gen.next()
  expect(next.value).toStrictEqual(put(actions.addHistory(1)))
})
