// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import A from '../'

const href = 'https://akameco.github.io'
const children = <h1>Test</h1>

const renderComponent = (props = {}) =>
  shallow(
    <A href={href} {...props}>
      {children}
    </A>
  )

test('render an <a> tag', () => {
  const c = renderComponent()
  expect(c.type()).toEqual('a')
})

test('have an href attribute', () => {
  const c = renderComponent()
  expect(c.prop('href')).toEqual(href)
})

test('have children', () => {
  const c = renderComponent()
  expect(c.contains(children)).toEqual(true)
})

test('have a className attribute', () => {
  const className = 'test'
  const c = renderComponent({ className })
  expect(c.find('a').hasClass(className)).toEqual(true)
})

test('adopt a target', () => {
  const target = '_blank'
  const c = renderComponent({ target })
  expect(c.prop('target')).toEqual(target)
})

test('adopt a type attribute', () => {
  const type = 'text/html'
  const c = renderComponent({ type })
  expect(c.prop('type')).toEqual(type)
})

test('snapshot', () => {
  const c = renderComponent()
  expect(toJson(c)).toMatchSnapshot()
})
