// @flow
import React from 'react'
// $FlowFixMe
import { configure, setAddon, addDecorator } from '@storybook/react'
// import infoAddon, { setDefaults } from '@storybook/addon-info'
// $FlowFixMe
import { withKnobs } from '@storybook/addon-knobs'
import styled, { ThemeProvider } from 'styled-components'
import theme, { key } from '../app/styleTheme'

// setDefaults({ inline: true })
// setAddon(infoAddon)

const Background = styled.div`
  background: ${key('base')};
  min-width: 400px;
  width: 100%;
  min-height: 400px;
  height: 100%;
`

const ThemeDecorator = storyFn =>
  <ThemeProvider theme={theme}>
    <Background>
      {storyFn()}
    </Background>
  </ThemeProvider>

addDecorator(ThemeDecorator)
addDecorator(withKnobs)

// $FlowFixMe
const context = require.context('../app/', true, /example\.js$/)
function loadStories() {
  context.keys().forEach(context)
}

configure(() => {
  loadStories()
}, module)
