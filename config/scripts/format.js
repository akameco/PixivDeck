'use strict'
const execa = require('execa')

const files = '{app/!(dist|node_modules)/,config}/**/*.js'

execa.shell(
  `prettier --write --single-quote --semi=false --jsx-bracket-same-line --trailing-comma es5 --print-width 80 "${files}"`,
  { stdio: 'inherit' }
)
