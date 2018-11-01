// @noflow
import { makeSelectLocale } from '../selectors'

test('makeSelectLocale', () => {
  const state = { Language: { locale: 'en' } }
  expect(makeSelectLocale()(state)).toMatchSnapshot()
})
