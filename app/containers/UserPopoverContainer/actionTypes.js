// @flow
export type OPEN_TYPE = 'UserPopoverContainer/OPEN'
export type CLEAR_TYPE = 'UserPopoverContainer/CLEAR'

export type POPOVER_TYPE = 'UserPopoverContainer/ADD_POPOVER'
export type POPOVER_SUCCESS_TYPE = 'UserPopoverContainer/ADD_POPOVER_SUCCESS'
export type POPOVER_FAILRE_TYPE = 'UserPopoverContainer/ADD_POPOVER_FAILRE'

export type Action =
  | {| +type: OPEN_TYPE, id: number |}
  | {|
      +type: POPOVER_SUCCESS_TYPE,
      illusts: Array<number>,
    |}
  | {| +type: CLEAR_TYPE |}
  | {| +type: POPOVER_FAILRE_TYPE, +error: string |}
