// @flow
import { addLocaleData } from 'react-intl'
import jaLocaleData from 'react-intl/locale-data/ja'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'
import idLocaleData from 'react-intl/locale-data/id'
import zhtwLocaleData from './localedata-zhtw'

import enTranslationMessages from './en.yml'
import idTranslationMessages from './id.yml'
import jaTranslationMessages from './ja.yml'
import zhTranslationMessages from './zh.yml'
import zhtwTranslationMessages from './zh-TW.yml'

addLocaleData(enLocaleData)
addLocaleData(idLocaleData)
addLocaleData(jaLocaleData)
addLocaleData(zhLocaleData)
addLocaleData(zhtwLocaleData)

export const appLocales = ['en', 'id', 'ja', 'zh', 'zh-tw']

export const translationMessages = {
  en: enTranslationMessages,
  id: idTranslationMessages,
  ja: jaTranslationMessages,
  zh: zhTranslationMessages,
  'zh-tw': zhtwTranslationMessages,
}
