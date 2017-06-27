import { configure, setAddon, addDecorator } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

setDefaults({ inline: true })
setAddon(infoAddon)

addDecorator(withKnobs)

const context = require.context('../app/', true, /example\.js$/)
function loadStories() {
  context.keys().forEach(context)
}

configure(() => {
  loadStories()
}, module)
