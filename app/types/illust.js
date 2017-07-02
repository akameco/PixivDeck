// @flow
export type ImageUrls = {|
  squareMedium: string,
  medium: string,
  large: string,
|}

export type MetaPages = Array<{|
  imageUrls: {|
    squareMedium: string,
    medium: string,
    large: string,
    original: string,
  |},
|}>

export type Illust = {|
  id: number,
  title: string,
  type: 'illust',
  imageUrls: $Shape<ImageUrls>,
  caption: string,
  restrict: number,
  user: number,
  tags: Array<{ name: string }>,
  tools: Array<string>,
  createDate: string,
  pageCount: number,
  width: number,
  height: number,
  metaSinglePage: {
    originalImageUrl?: string,
  },
  metaPages?: MetaPages,
  totalView: number,
  totalBookmarks: number,
  isBookmarked: boolean,
  visible: boolean,
|}

type Key = number | string

export type Illusts = { [key: Key]: Illust }
