// @flow
import { addLocaleData } from 'react-intl'
import jaLocaleData from 'react-intl/locale-data/ja'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'

import enTranslationMessages from './en.yml'
import jaTranslationMessages from './ja.yml'
import zhTranslationMessages from './zh.yml'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)
addLocaleData(zhLocaleData)

export const appLocales = ['en', 'ja', 'zh']

export const translationMessages = {
  en: enTranslationMessages,
  ja: jaTranslationMessages,
  zh: zhTranslationMessages,
}
