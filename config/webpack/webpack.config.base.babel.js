import path from 'path'
import webpack from 'webpack'
import readPkgUp from 'read-pkg-up'

const appPath = path.resolve(process.cwd(), 'app')
const { package: dependencies = {} } = readPkgUp.sync()

export default {
  externals: Object.keys(dependencies),

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
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
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [appPath, 'node_modules'],
  },

  plugins: [new webpack.NamedModulesPlugin()],
}
