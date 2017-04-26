'use strict';
const extractMessages = require('extract-react-intl-messages');

const locales = ['en', 'ja'];
const files = 'app/**/!(*.test).js';
const buildDir = 'app/translations';
const opts = {
  defaultLocale: 'ja',
  format: 'yaml'
};

extractMessages(locales, files, buildDir, opts).catch(console.error);
