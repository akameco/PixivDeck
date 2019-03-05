import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Chip from '.'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`
storiesOf('Chip', module).add('basic', () => {
  return (
    <Wrapper>
      <Chip onClick={action('chip-click')} onRequestDelete={action('close')}>
        Hello
      </Chip>

      <Chip onClick={action('chip-click')}>Hello</Chip>
    </Wrapper>
  )
})
