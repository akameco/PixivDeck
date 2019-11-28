'use strict'
const extractMessages = require('extract-react-intl-messages').default

const locales = ['en', 'ja', 'zh']
const files = 'app/**/messages.ts'
const buildDir = 'app/i18n'
const opts = {
  defaultLocale: 'ja',
  format: 'yaml',
}

extractMessages(locales, files, buildDir, opts).catch(console.error)
