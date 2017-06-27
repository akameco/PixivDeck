// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import A from './index'

storiesOf('A', module).addWithInfo('basic', () => {
  return <A>Hello</A>
})
