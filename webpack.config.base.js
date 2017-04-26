import path from 'path'
import webpack from 'webpack'
import readPkgUp from 'read-pkg-up'

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
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.join(__dirname, 'app'), 'node_modules'],
  },

  plugins: [new webpack.NamedModulesPlugin()],
}
