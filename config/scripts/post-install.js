'use strict'
const execa = require('execa')

const cmds = [
  'npm run flow-typed',
  'npm run build-dll',
  'install-app-deps',
  'node node_modules/fbjs-scripts/node/check-dev-engines.js package.json',
].map(v => `"${v}"`)

const cmd = `concurrently ${cmds.join(' ')}`
execa.shell(cmd, { stdio: 'inherit' }).catch(console.log)
