import * as React from 'react'
import { mount } from 'enzyme' // eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import
import 'jest-styled-components'
import A from '..'

const href = 'https://akameco.github.io'
const children = <h1>Test</h1>

const renderComponent = (props = {}) =>
  mount(
    <A href={href} {...props}>
      {children}
    </A>
  )

test('have an href attribute', () => {
  const c = renderComponent()
  expect(c.prop('href')).toStrictEqual(href)
})
test('have children', () => {
  const c = renderComponent()
  expect(c.contains(children)).toStrictEqual(true)
})
test('have a className attribute', () => {
  const className = 'test'
  const c = renderComponent({
    className,
  })
  expect(c.find('a').hasClass(className)).toStrictEqual(true)
})
test('adopt a target', () => {
  const target = '_blank'
  const c = renderComponent({
    target,
  })
  expect(c.prop('target')).toStrictEqual(target)
})
test('adopt a type attribute', () => {
  const type = 'text/html'
  const c = renderComponent({
    type,
  })
  expect(c.prop('type')).toStrictEqual(type)
})
