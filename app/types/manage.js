// @flow
export type Manage = {|
  isLoading: boolean,
  isDrawer: boolean,
  isImageView: boolean,
  isImgLoaded: boolean,
  isMangaView: boolean,
  currentIllustId: ?number,
  userId: ?number,
|}

export type ManageAction =
  | {| type: 'OPEN_IMAGE_VIEW' |}
  | {| type: 'CLOSE_IMAGE_VIEW' |}
  | {| type: 'OPEN_MANGA_PREVIEW' |}
  | {| type: 'CLOSE_MANGA_PREVIEW' |}
  | {| type: 'OPEN_DRAWER', id: number |}
  | {| type: 'CLOSE_DRAWER' |}
  | {| type: 'SET_CURRENT_ILLUST', id: number |}
  | {| type: 'CLOSE_ALL' |}
  | {| type: 'START_IMG_LOADING' |}
  | {| type: 'FINISH_IMG_LOADED' |}
  | {| type: 'START_LOADING' |}
