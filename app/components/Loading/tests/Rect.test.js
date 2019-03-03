// @flow
import * as React from 'react'
import { mount } from 'enzyme'

import Rect from '../Rect'

test('render a prop', () => {
  const delay = -0.1
  const c = mount(<Rect delay={-0.1} />)
  expect(c.prop('delay')).toStrictEqual(delay)
})
