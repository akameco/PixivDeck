import * as React from 'react'
import IllustPreview from '../IllustPreview'
import MangaPreview from '../MangaPreview'

export interface Props {
  isOpenImage: boolean
  isOpenManga: boolean
}

const Preview = ({ isOpenImage, isOpenManga }: Props) => {
  if (isOpenImage) {
    return <IllustPreview />
  } else if (isOpenManga) {
    return <MangaPreview />
  }

  return null
}

export default Preview
