// @flow
import path from 'path'
import { transformFileSync } from 'babel-core'
import funcPlugin from 'babel-plugin-create-redux-action-func'
import typePlugin from 'babel-plugin-create-redux-action-type'
import actionComposePlugin from 'babel-plugin-redux-action-compose'
import statePlugin from 'babel-plugin-redux-state-compose'

const fs = require('fs')
const { basename, resolve, dirname } = require('path')
const chokidar = require('chokidar')
const prettier = require('prettier')
const cpFile = require('cp-file')

const watcher = chokidar.watch('app/**/*.js', {
  cwd: process.cwd(),
  ignoreInitial: true,
})

const transfromWrite = (input, output, plugin) => {
  try {
    const { code } = transformFileSync(input, {
      babelrc: false,
      plugins: [plugin],
    })

    const fomattedCode = prettier.format(code, {
      semi: false,
      singleQuote: true,
      trailingComma: 'es5',
    })

    fs.writeFileSync(output, fomattedCode, 'utf-8')
  } catch (err) {
    console.log(err)
  }
}

watcher.on('change', (input /* : string */) => {
  console.log(input)

  if (basename(input).includes('actionTypes')) {
    const outputPath = output => resolve(dirname(input), output)

    transfromWrite(input, outputPath('actions.js'), [
      funcPlugin,
      { actionTypes: 'actionTypes.js' },
    ])

    transfromWrite(input, outputPath('constants.js'), [
      typePlugin,
      { filename: 'actionTypes.js' },
    ])

    const x = resolve(process.cwd(), 'app/action.js')
    transfromWrite(x, x, [actionComposePlugin, { inputPath: input }])
  } else if (basename(input).includes('reducer')) {
    const x = resolve(process.cwd(), 'app/types/state.js')
    transfromWrite(x, x, [statePlugin, { input }])
  }
})

watcher.on('add', async (input /* : string */) => {
  if (basename(input) === 'reducer.js') {
    try {
      await cpFile(
        path.resolve(__dirname, '../templates/reducer.js.tmp'),
        input
      )
    } catch (err) {
      console.log(err)
    }
  }

  if (basename(input) === 'reducer.test.js') {
    try {
      await cpFile(
        path.resolve(__dirname, '../templates/reducer.test.js.tmp'),
        input
      )
    } catch (err) {
      console.log(err)
    }
  }

  if (basename(input) === 'selectors.js') {
    try {
      await cpFile(
        path.resolve(__dirname, '../templates/selectors.js.tmp'),
        input
      )
    } catch (err) {
      console.log(err)
    }
  }

  if (basename(input) === 'index.test.js') {
    try {
      await cpFile(
        path.resolve(__dirname, '../templates/index.test.js.tmp'),
        input
      )
    } catch (err) {
      console.log(err)
    }
  }
})
