// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Dispatch, State } from 'types'
import type { Illust } from 'types/illust'
import {
  coloseIllustViewer,
  startImgLoading,
  finishImgLoading,
} from './actions'
import Preview from './IllustPreview'

type Props = {
  illust: Illust,
  show: boolean,
  isLoaded: boolean,
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
    const { illust, show } = this.props
    return (
      <Preview
        show={show}
        from={illust.imageUrls.large}
        width={illust.width}
        height={illust.height}
        to={illust.metaSinglePage.originalImageUrl}
        isLoaded={this.props.isLoaded}
        onLoad={this.handleLoad}
        onUnLoad={this.handleUnLoad}
        onClose={this.handleClose}
      />
    )
  }
}

const mapStateToProps = (state: State, { id }) => ({
  illust: state.illustById[id],
  show: state.IllustPreview.open,
  isLoaded: !state.IllustPreview.isImgLoading,
})

export default connect(mapStateToProps)(IllustPreviewContainer)
