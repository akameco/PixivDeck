import en from './en.yml'
import ja from './ja.yml'

const getBlank = (obj: object) => Object.keys(obj).filter(v => obj[v] === '')

test('snapshot [en]', () => {
  expect(en).toMatchSnapshot()
})

test('snapshot [ja]', () => {
  expect(ja).toMatchSnapshot()
})

test('check whitelist [en]', () => {
  const blanks = getBlank(en)
  expect(blanks).toMatchSnapshot()
})

test('check whitelist [ja]', () => {
  const blanks = getBlank(ja)
  expect(blanks).toMatchSnapshot()
})
