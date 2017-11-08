// @flow
const path = require('path')
const actionTypesPlugin = require('babel-plugin-s2s-action-types').default
const actionCreaterPlugin = require('babel-plugin-s2s-action-creater').default
const actionRootPlugin = require('babel-plugin-s2s-action-root').default

const cwd = process.cwd()

const getRootDir = (...x) => path.resolve(cwd, 'app', ...x)
const getTyepDir = x => getRootDir('types', x)

const rootActionPath = getTyepDir('action.js')

module.exports = {
  watch: './**/*.js',
  plugins: [
    {
      test: /actionTypes.js$/,
      plugin: [actionTypesPlugin, { removePrefix: 'app/containers' }],
    },
    {
      test: /actionTypes.js$/,
      output: 'actions.js',
      plugin: [actionCreaterPlugin],
    },
    {
      test: /actionTypes.js$/,
      input: rootActionPath,
      output: rootActionPath,
      plugin: [
        actionRootPlugin,
        { input: 'app/**/actionTypes.js', output: rootActionPath },
      ],
    },
  ],
  templates: [],
}
