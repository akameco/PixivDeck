// @flow
import { CLOSE_MANGA_PREVIEW, OPEN_MANGA_PREVIEW } from './actionTypes'
import type { CloseMangaPreview, OpenMangaPreview } from './actionTypes'

export function closeMangaPreview(): CloseMangaPreview {
  return {
    type: CLOSE_MANGA_PREVIEW,
  }
}
export function openMangaPreview(id: number): OpenMangaPreview {
  return {
    type: OPEN_MANGA_PREVIEW,
    id,
  }
}
