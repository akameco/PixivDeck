import reducer from '../reducer'

test('default action', () => {
  expect(
    reducer(
      {},
      {
        // @ts-ignore
        type: 'default action',
      }
    )
  ).toMatchSnapshot()
})
