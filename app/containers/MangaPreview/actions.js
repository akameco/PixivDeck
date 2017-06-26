// @flow
import type { Action } from './actionTypes.js'
import { CLOSE_MANGA_PREVIEW, OPEN_MANGA_PREVIEW } from './constants'

export function closeMangaPreview(): Action {
  return {
    type: CLOSE_MANGA_PREVIEW,
  }
}

export function openMangaPreview(id: number): Action {
  return {
    type: OPEN_MANGA_PREVIEW,
    id,
  }
}
