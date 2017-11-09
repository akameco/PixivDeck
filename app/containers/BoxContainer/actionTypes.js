// @flow
export const OPEN_PIXIV: 'BoxContainer/OPEN_PIXIV' = 'BoxContainer/OPEN_PIXIV'

export const Actions = {
  OPEN_PIXIV,
}

export type OpenPixiv = {
  type: typeof OPEN_PIXIV,
  id: number,
}

export type Action = OpenPixiv
