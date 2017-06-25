// @flow
import type { Illust } from 'types/illust'

export type OPEN_USER_POPOVER_TYPE = 'UserPopoverContainer/OPEN_USER_POPOVER'
export type ADD_POPOVER_TYPE = 'UserPopoverContainer/ADD_POPOVER'
export type CLEAR_POPOVER_TYPE = 'UserPopoverContainer/CLEAR_POPOVER'

export type Action =
  | {| +type: OPEN_USER_POPOVER_TYPE, id: number |}
  | {| +type: ADD_POPOVER_TYPE, illusts: Array<Illust> |}
  | {| +type: CLEAR_POPOVER_TYPE |}
