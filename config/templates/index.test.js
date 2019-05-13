// @flow
import React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Comp from '.'

test('snapshot', () => {
  expect(toJSON(mount(<Comp />))).toMatchSnapshot()
})
