import webpack from 'webpack'
import merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import baseConfig from './webpack.config.base'

export default merge.smart(baseConfig, {
  devtool: false,

  target: 'electron-main',

  entry: ['babel-polyfill', './app/main.development'],

  // 'main.js' in root
  output: {
    path: process.cwd(),
    filename: './app/main.js',
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode:
        process.env.OPEN_ANALYZER === 'true' ? 'server' : 'disabled',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true',
    }),

    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ),
      'process.env.DEBUG_PROD': JSON.stringify(
        process.env.DEBUG_PROD || 'false'
      ),
    }),
  ],

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false,
  },

  externals: [
    'electron-config',
    'electron-referer',
    'electron-context-menu',
    'electron-dl',
  ],
})
