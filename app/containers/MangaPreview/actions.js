// @flow
import type { Action } from './actionTypes.js'
import { OPEN_MANGA_PREVIEW, CLOSE_MANGA_PREVIEW } from './constants'

export function openMangaPreview(): Action {
  return {
    type: OPEN_MANGA_PREVIEW,
  }
}

export function closeMangaPreview(): Action {
  return {
    type: CLOSE_MANGA_PREVIEW,
  }
}
