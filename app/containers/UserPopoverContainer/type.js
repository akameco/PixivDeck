// @flow
import { OPEN_USER_POPOVER } from './constants'

export type Action = {|
  type: typeof OPEN_USER_POPOVER,
  +id: number,
|}
