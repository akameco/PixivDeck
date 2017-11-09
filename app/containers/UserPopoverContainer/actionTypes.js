// @flow
export const OPEN: 'UserPopoverContainer/OPEN' = 'UserPopoverContainer/OPEN'
export const CLEAR: 'UserPopoverContainer/CLEAR' = 'UserPopoverContainer/CLEAR'
export const POPOVER_REQUEST: 'UserPopoverContainer/POPOVER_REQUEST' =
  'UserPopoverContainer/POPOVER_REQUEST'
export const POPOVER_SUCCESS: 'UserPopoverContainer/POPOVER_SUCCESS' =
  'UserPopoverContainer/POPOVER_SUCCESS'
export const POPOVER_FAILURE: 'UserPopoverContainer/POPOVER_FAILURE' =
  'UserPopoverContainer/POPOVER_FAILURE'

export const Actions = {
  OPEN,
  CLEAR,
  POPOVER_REQUEST,
  POPOVER_SUCCESS,
  POPOVER_FAILURE,
}

export type Open = {
  type: typeof OPEN,
  id: number,
}
export type Clear = {
  type: typeof CLEAR,
}
export type PopoverRequest = {
  type: typeof POPOVER_REQUEST,
}
export type PopoverSuccess = {
  type: typeof POPOVER_SUCCESS,
  illusts: number[],
}
export type PopoverFailure = {
  type: typeof POPOVER_FAILURE,
  error: string,
}

export type Action =
  | Open
  | Clear
  | PopoverRequest
  | PopoverSuccess
  | PopoverFailure
