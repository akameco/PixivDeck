// @flow
export type ADD_BOOKMARK_REQUEST_TYPE = 'BookmarkButton/ADD_BOOKMARK_REQUEST'

export type Action = {|
  +type: ADD_BOOKMARK_REQUEST_TYPE,
  +id: number,
  +isPublic: boolean,
|}
