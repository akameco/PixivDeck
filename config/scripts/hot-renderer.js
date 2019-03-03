'use strict'
const { shell } = require('execa')

const electron = 'electron -r @babel/register'
const env = 'cross-env HOT=1 NODE_ENV=development'
const cmd = `${env} ${electron} ./app/main.dev`

shell(cmd, { stdio: 'inherit' })
