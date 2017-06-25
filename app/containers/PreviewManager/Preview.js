// @flow
import React from 'react'

import IllustPreview from '../IllustPreview'
import MangaPreview from '../MangaPreview'

export type Props = {
  id?: ?number,
  isOpenImage: boolean,
  isOpenManga: boolean,
}

const Preview = ({ id, isOpenImage, isOpenManga }: Props) => {
  if (!id) {
    return null
  }

  if (isOpenImage) {
    return <IllustPreview id={id} />
  } else if (isOpenManga) {
    return <MangaPreview id={id} />
  }

  return null
}

export default Preview
