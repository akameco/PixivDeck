// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Comp from './'

test('snapshot', () => {
  expect(
    toJSON(shallow(<Comp onChange={jest.fn()} defaultValue="0" />))
  ).toMatchSnapshot()
})
