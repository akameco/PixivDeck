// @flow
import type { Illust } from './illust'

export type Popover = {
  illusts: Array<Illust>,
}

export type PopoverAction =
  | {| type: 'ADD_USER_POPOVER_ILLUST', payload: Array<Illust> |}
  | {| type: 'CLEAR_USER_POPOVER_ILLUST' |}
