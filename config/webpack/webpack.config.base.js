import path from 'path'
import webpack from 'webpack'
import readPkgUp from 'read-pkg-up'

const appPath = path.resolve(process.cwd(), 'app')
const { pkg: dependencies = {} } = readPkgUp.sync()

export default {
  externals: Object.keys(dependencies),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: appPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: [appPath, 'node_modules'],
  },

  plugins: [new webpack.NamedModulesPlugin()],
}
