'use strict'
const execa = require('execa')

const files = '{app/!(dist|node_modules)/,config}/**/*.js'

const cmd = [
  'prettier',
  '--write',
  '--single-quote',
  '--semi=false',
  '--trailing-comma',
  'es5',
  `"${files}"`,
].join(' ')

execa.shell(cmd, { stdio: 'inherit' }).catch(console.log)
