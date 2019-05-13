const path = require('path')
const createReduxActionFunc = require('babel-plugin-create-redux-action-func')
  .default
const typePlugin = require('babel-plugin-create-redux-action-type').default
const actionComposePlugin = require('babel-plugin-redux-action-compose').default
const stateComposePlugin = require('babel-plugin-redux-state-compose').default

const getRootDirectory = input => path.resolve(process.cwd(), 'app', input)

module.exports = {
  plugins: [
    {
      test: /actionTypes.js$/,
      output: 'actions.js',
      plugin: [createReduxActionFunc],
    },
    {
      test: /actionTypes.js$/,
      input: getRootDirectory('action.js'),
      output: getRootDirectory('action.js'),
      plugin: [actionComposePlugin, { input }],
    },
  ],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  templatesDir: path.resolve(__dirname, 'config', 'templates'),
  templates: [
    { test: /reducer.js/, input: 'reducer.js' },
    { test: /reducer.js/, input: 'reducer.test.js', output: 'reducer.test.js' },
    { test: /selectors.js/, input: 'selectors.js' },
    { test: /index.test.js/, input: 'index.test.js' },
  ],
}
