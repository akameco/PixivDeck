'use strict'

module.exports = {
  modulePaths: ['/app'],
  moduleFileExtensions: ['js', 'json'],
  setupFiles: ['raf/polyfill', '<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.yml$': 'jest-yaml-flat-transfrom'
  },
  moduleNameMapper: {
    '^styles/(.*)$': '<rootDir>/app/styles/$1.js',
    '^components/(.*)$': '<rootDir>/app/components/$1.js',
    '^containers/(.*)$': '<rootDir>/app/containers/$1.js',
    '^types/(.*)$': '<rootDir>/app/types/$1.js',
    '^services/(.*)$': '<rootDir>/app/services/$1.js',
    '^utils/(.*)$': '<rootDir>/app/utils/$1.js'
  }
}
