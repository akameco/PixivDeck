// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import { closeMangaPreview } from './actions'
import MultiPreview from './MultiPreview'
import { makeSelectIllust } from './selectors'

type Props = {
  illust: Illust,
  close: () => void,
}

function MangaPreviewContainer({ illust, close }: Props) {
  if (illust.metaPages) {
    return <MultiPreview pages={illust.metaPages} onClose={close} />
  }

  return null
}

const mapStateToProps = createStructuredSelector({
  illust: makeSelectIllust(),
})

type OP = { id: number }

const connector: Connector<
  OP,
  Props
> = connect(mapStateToProps, (dispatch: Dispatch) => {
  return {
    close() {
      dispatch(closeMangaPreview())
    },
  }
})
export default connector(MangaPreviewContainer)
