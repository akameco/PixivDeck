'use strict'
const path = require('path')
const execa = require('execa')

const nodeModulesPath = path.join(process.cwd(), 'node_modules')
const configPath = path.join(process.cwd(), 'config', 'webpack')

const webpackPath = path.join(nodeModulesPath, 'webpack/bin/webpack')
const webpackServerPath = path.join(
  nodeModulesPath,
  'webpack-dev-server',
  'bin',
  'webpack-dev-server'
)

const node = 'node --trace-warnings -r @babel/register'

const getEnv = x => `cross-env NODE_ENV=${x}`
const devEnv = getEnv('development')
const prodEnv = getEnv('production')

const webpackOpts = '--progress --profile --colors'
const config = x =>
  `--config ${path.join(configPath, `webpack.config.${x}.babel.js`)}`

const exec = (file, env, p = webpackPath) => {
  const opts = p === webpackPath ? webpackOpts : ''
  const cmd = `${env} ${node} ${p} ${config(file)} ${opts}`.trim()
  execa.shell(cmd, { stdio: 'inherit' })
}

const runWebpack = {
  'build-dll': () => exec('renderer.dev.dll', devEnv),
  'build-main': () => exec('main.prod', prodEnv),
  'build-renderer': () => exec('renderer.prod', prodEnv),
  'hot-server': () => exec('renderer.dev', devEnv, webpackServerPath),
}

const input = process.argv.slice(2)[0]
runWebpack[input]()
