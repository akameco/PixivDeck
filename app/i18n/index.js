// @flow
import { addLocaleData } from 'react-intl'
import jaLocaleData from 'react-intl/locale-data/ja'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'
import zhtwLocaleData from './localedata-zhtw'

import enTranslationMessages from './en.yml'
import jaTranslationMessages from './ja.yml'
import zhTranslationMessages from './zh.yml'
import zhtwTranslationMessages from './zh-TW.yml'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)
addLocaleData(zhLocaleData)
addLocaleData(zhtwLocaleData)

export const appLocales = ['en', 'ja', 'zh', 'zh-tw']

export const translationMessages = {
  en: enTranslationMessages,
  ja: jaTranslationMessages,
  zh: zhTranslationMessages,
  'zh-tw': zhtwTranslationMessages,
}
