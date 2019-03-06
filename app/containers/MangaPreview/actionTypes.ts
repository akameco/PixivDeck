export type OPEN_MANGA_PREVIEW_TYPE = 'MangaPreview/open'
export type CLOSE_MANGA_PREVIEW_TYPE = 'MangaPreview/close'
export type Action =
  | {
      type: CLOSE_MANGA_PREVIEW_TYPE
    }
  | {
      type: OPEN_MANGA_PREVIEW_TYPE
      id: number
    }
