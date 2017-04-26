// @flow
import { CHNAGE_LOCALE } from './constants'

export type State = {|
  +locale: string,
|}

export type Action = {|
  type: typeof CHNAGE_LOCALE,
  +locale: string,
|}
