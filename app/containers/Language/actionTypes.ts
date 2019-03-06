export type CHANGE_LOCALE_TYPE = 'Language/CHANGE_LOCALE'
export interface Action {
  type: CHANGE_LOCALE_TYPE
  locale: string
}
