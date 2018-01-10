// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Language } from '../'

test('snapshot', () => {
  const children = <h1>Test</h1>
  const wrap = shallow(
    // $FlowFixMe
    <Language locale="en" messages={{ en: {}, ja: {} }}>
      {children}
    </Language>
  )
  expect(toJSON(wrap)).toMatchSnapshot()
})
