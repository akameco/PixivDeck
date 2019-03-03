import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import readPkgUp from 'read-pkg-up'
import baseConfig from './webpack.config.base.babel'

const { pkg: dependencies = {} } = readPkgUp.sync()

const dist = path.resolve(process.cwd(), 'dll')

export default merge.smart(baseConfig, {
  mode: 'development',
  context: process.cwd(),

  devtool: 'eval',

  target: 'electron-renderer',

  externals: ['fsevents', 'crypto-browserify'],

  module: require('./webpack.config.renderer.dev.babel').default.module,

  resolve: {
    modules: ['app', 'node_modules'],
  },

  entry: {
    vendor: [...Object.keys(dependencies)].filter(
      dependency => dependency !== 'font-awesome'
    ),
  },

  output: {
    library: 'vendor',
    path: dist,
    filename: '[name].dll.js',
    libraryTarget: 'var',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(dist, '[name].json'),
      name: '[name]',
    }),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: path.resolve(process.cwd(), 'app'),
        output: {
          path: path.resolve(process.cwd(), 'dll'),
        },
      },
    }),
  ],
})
