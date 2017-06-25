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

class IllustPreviewContainer extends Component {
  props: Props

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
    return (
      <Preview
        show={show}
        from={illust.imageUrls.large}
        width={illust.width}
        height={illust.height}
        to={illust.metaSinglePage.originalImageUrl}
        isLoaded={!isImgLoading}
        onLoad={this.handleLoad}
        onUnLoad={this.handleUnLoad}
        onClose={this.handleClose}
      />
    )
  }
}

type OP = {
  id: number,
}

const mapStateToProps = createStructuredSelector({
  illust: selectors.makeSelectIllust(),
  show: selectors.makeSelectIsImage(),
  isImgLoading: selectors.makeSelectIsImgLoding(),
})

const connecter: Connector<OP, Props> = connect(mapStateToProps)
export default connecter(IllustPreviewContainer)
