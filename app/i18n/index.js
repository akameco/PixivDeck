// @flow
import { addLocaleData } from 'react-intl'
import { flatten } from 'flat'
import jaLocaleData from 'react-intl/locale-data/ja'
import enLocaleData from 'react-intl/locale-data/en'

import enTranslationMessages from './en.yml'
import jaTranslationMessages from './ja.yml'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

export const appLocales = ['en', 'ja']

export const translationMessages = {
  en: flatten(enTranslationMessages),
  ja: flatten(jaTranslationMessages),
}
