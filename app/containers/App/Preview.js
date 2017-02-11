// @flow
import React from 'react'

import IllustPreview from 'components/preview/illust'
import MangaPreview from 'components/preview/manga'

type Props = {
	currentIllustId?: ?number,
	isImageView: bool,
	isMangaView: bool,
}

const Preview = ({currentIllustId, isImageView, isMangaView}: Props) => {
	if (!currentIllustId) {
		return null
	}

	if (isImageView) {
		return <IllustPreview id={currentIllustId}/>
	} else if (isMangaView) {
		return <MangaPreview id={currentIllustId}/>
	}

	return null
}

export default Preview
