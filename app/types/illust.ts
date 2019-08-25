export interface ImageUrls {
  squareMedium: string
  medium: string
  large: string
}

export type MetaPages = {
  imageUrls: {
    squareMedium: string
    medium: string
    large: string
    original: string
  }
}[]

export interface Tag {
  name: string
}

export interface Illust {
  id: number
  title: string
  type: 'illust'
  imageUrls: Partial<ImageUrls>
  caption: string
  restrict: number
  user: number
  tags: Tag[]
  tools: string[]
  createDate: string
  pageCount: number
  width: number
  height: number
  metaSinglePage: {
    originalImageUrl?: string
  }
  metaPages?: MetaPages
  totalView: number
  totalBookmarks: number
  isBookmarked: boolean
  visible: boolean
  isMuted: boolean
  totalComments: number
}

export interface Illusts {
  [key: string]: Illust
}
