import * as sagas from '../saga'

test('root', () => {
  const gen = sagas.default()
  const next = gen.next()
  expect(next.value).toMatchSnapshot()
})
