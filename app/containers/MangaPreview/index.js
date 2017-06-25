// @flow
import React, { Component } from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import { closeMnagaPreview } from 'actions'
import Preview from './MangaPreview'
import MultiPreview from './MultiPreview'
import { makeSelectIsManga, makeSelectIllust } from './selectors'

type Props = {
  illust: Illust,
  show: boolean,
  dispatch: Dispatch,
}

class MangaPreviewContainer extends Component {
  props: Props

  handleClose = () => {
    this.props.dispatch(closeMnagaPreview())
  }

  render() {
    const { illust, show } = this.props
    if (illust.metaPages) {
      return (
        <MultiPreview pages={illust.metaPages} onClose={this.handleClose} />
      )
    }

    return (
      <Preview
        show={show}
        img={illust.imageUrls.large}
        onClose={this.handleClose}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  illust: makeSelectIllust(),
  show: makeSelectIsManga(),
})

type OP = { id: number }

const connector: Connector<OP, Props> = connect(mapStateToProps)
export default connector(MangaPreviewContainer)
