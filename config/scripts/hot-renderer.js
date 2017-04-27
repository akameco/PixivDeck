'use strict'
const { shell } = require('execa')

const electron = 'electron -r babel-register -r babel-polyfill'
const env = 'cross-env HOT=1 NODE_ENV=development'
const cmd = `${env} ${electron} ./app/main.development`

shell(cmd, { stdio: 'inherit' })
