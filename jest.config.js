'use strict'

module.exports = {
  modulePaths: ['/app'],
  moduleFileExtensions: ['js', 'json'],
  modulesDirectories: ['app'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^styleTheme$': '<rootDir>/app/styleTheme.js',
  },
}
