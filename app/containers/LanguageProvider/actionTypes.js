// @flow
export type CHANGE_LOCALE_TYPE = 'LanguageProvider/CHANGE_LOCALE'

export type Action = {
  +type: CHANGE_LOCALE_TYPE,
  locale: string,
}
