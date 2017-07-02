// @flow
export type OPEN_DRAWER_TYPE = 'DrawerManager/OPEN'
export type CLOSE_DRAWER_TYPE = 'DrawerManager/CLOSE'

export type Action =
  | {| +type: CLOSE_DRAWER_TYPE |}
  | {| +type: OPEN_DRAWER_TYPE, id: number |}
