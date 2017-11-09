// @flow
export const CLOSE_MANGA_PREVIEW: 'MangaPreview/CLOSE_MANGA_PREVIEW' =
  'MangaPreview/CLOSE_MANGA_PREVIEW'
export const OPEN_MANGA_PREVIEW: 'MangaPreview/OPEN_MANGA_PREVIEW' =
  'MangaPreview/OPEN_MANGA_PREVIEW'

export const Actions = {
  CLOSE_MANGA_PREVIEW,
  OPEN_MANGA_PREVIEW,
}

export type CloseMangaPreview = {
  type: typeof CLOSE_MANGA_PREVIEW,
}
export type OpenMangaPreview = {
  type: typeof OPEN_MANGA_PREVIEW,
  id: number,
}

export type Action = CloseMangaPreview | OpenMangaPreview
