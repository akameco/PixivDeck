// @flow
export type OPEN_MANGA_PREVIEW_TYPE = 'MangaPreview/open'
export type CLOSE_MANGA_PREVIEW_TYPE = 'MangaPreview/close'

export type Action = {
  +type: OPEN_MANGA_PREVIEW_TYPE | CLOSE_MANGA_PREVIEW_TYPE,
}
