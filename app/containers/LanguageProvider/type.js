// @flow
import { CHANGE_LOCALE } from './constants'

export type State = {|
  +locale: string,
|}

export type Action = {|
  type: typeof CHANGE_LOCALE,
  +locale: string,
|}
