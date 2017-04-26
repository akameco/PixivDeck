// @flow
import React from 'react'

import IllustPreview from 'components/Preview/illust'
import MangaPreview from 'components/Preview/manga'

type Props = {
  currentIllustId?: ?number,
  isImageView: boolean,
  isMangaView: boolean,
}

const Preview = ({ currentIllustId, isImageView, isMangaView }: Props) => {
  if (!currentIllustId) {
    return null
  }

  if (isImageView) {
    return <IllustPreview id={currentIllustId} />
  } else if (isMangaView) {
    return <MangaPreview id={currentIllustId} />
  }

  return null
}

export default Preview
