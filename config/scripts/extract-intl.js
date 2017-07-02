'use strict'
const extractMessages = require('extract-react-intl-messages')

const locales = ['en', 'ja']
const files = 'app/**/messages.js'
const buildDir = 'app/i18n'
const opts = {
  defaultLocale: 'ja',
  format: 'yaml',
}

extractMessages(locales, files, buildDir, opts).catch(console.error)
