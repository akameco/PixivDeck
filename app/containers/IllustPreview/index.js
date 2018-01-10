// @flow
import React, { Component } from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import {
  coloseIllustViewer,
  startImgLoading,
  finishImgLoading,
} from './actions'
import * as selectors from './selectors'
import Preview from './IllustPreview'

type Props = {
  illust: Illust,
  show: boolean,
  isImgLoading: boolean,
  dispatch: Dispatch,
}

class IllustPreviewContainer extends Component<Props> {
  componentWillMount() {
    if (!this.props.illust) {
      this.props.dispatch(coloseIllustViewer())
    }
  }

  handleClose = () => {
    this.props.dispatch(coloseIllustViewer())
  }

  handleLoad = () => {
    this.props.dispatch(finishImgLoading())
  }

  handleUnLoad = () => {
    this.props.dispatch(startImgLoading())
  }

  render() {
    const { illust, show, isImgLoading } = this.props
    const original = illust.metaSinglePage.originalImageUrl || ''
    return (
      <Preview
        show={show}
        from={illust.imageUrls.large}
        width={illust.width}
        height={illust.height}
        original={original}
        isLoaded={!isImgLoading}
        onLoad={this.handleLoad}
        onUnLoad={this.handleUnLoad}
        onClose={this.handleClose}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  illust: selectors.makeSelectIllust(),
  show: selectors.makeSelectIsImage(),
  isImgLoading: selectors.makeSelectIsImgLoding(),
})

const connecter: Connector<{}, Props> = connect(mapStateToProps)
export default connecter(IllustPreviewContainer)
