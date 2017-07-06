// @flow
import { addLocaleData } from 'react-intl'
import jaLocaleData from 'react-intl/locale-data/ja'
import enLocaleData from 'react-intl/locale-data/en'

import enTranslationMessages from './en.yml'
import jaTranslationMessages from './ja.yml'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

export const appLocales = ['en', 'ja']

export const translationMessages = {
  en: enTranslationMessages,
  ja: jaTranslationMessages,
}
