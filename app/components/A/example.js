// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import A from './index'

storiesOf('A', module).add('basic', () => {
  return <A>Hello</A>
})
