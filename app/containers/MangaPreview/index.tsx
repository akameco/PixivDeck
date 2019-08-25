import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import { Illust } from 'types/illust'
import { closeMangaPreview } from './actions'
import MultiPreview from './MultiPreview'
import { makeSelectIllust } from './selectors'

interface Props {
  illust: Illust
  close: () => undefined
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
const connector = connect(
  mapStateToProps,
  (dispatch: Dispatch) => {
    return {
      close() {
        dispatch(closeMangaPreview())
      },
    }
  }
)
export default connector(MangaPreviewContainer)
