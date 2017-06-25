// @flow
export type Manage = {|
  isLoading: boolean,
  isDrawer: boolean,
  isImgLoaded: boolean,
  currentIllustId: ?number,
  userId: ?number,
|}

export type ManageAction =
  | {| type: 'OPEN_DRAWER', id: number |}
  | {| type: 'CLOSE_DRAWER' |}
  | {| type: 'SET_CURRENT_ILLUST', id: number |}
  | {| type: 'CLOSE_ALL' |}
  | {| type: 'START_IMG_LOADING' |}
  | {| type: 'FINISH_IMG_LOADED' |}
  | {| type: 'START_LOADING' |}
