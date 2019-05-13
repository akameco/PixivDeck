const developmentEnvironments = ['development', 'test']

const developmentPlugins = [require('react-hot-loader/babel')]
const productionPlugins = [require('babel-plugin-dev-expression')]

module.exports = api => {
  const development = api.env(developmentEnvironments)
  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: { electron: require('electron/package.json').version },
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      [require('@babel/preset-react'), { development }],
      require('@babel/preset-flow'),
    ],
    plugins: [
      [require('babel-plugin-react-intl-auto'), { removePrefix: 'app/' }],
      [require('@babel/plugin-proposal-class-properties'), { loose: true }],
      require('@babel/plugin-proposal-object-rest-spread'),
      ...(development ? developmentPlugins : productionPlugins),
    ],
  }
}
