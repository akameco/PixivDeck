// @flow
import { remote } from 'electron'
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import type { User } from 'types/user'
import { openDrawer } from 'containers/DrawerManager/actions'
import { openIllustViewer } from 'containers/IllustPreview/actions'
import { addColumn } from 'containers/ColumnSearch/actions'
import { openMangaPreview } from 'containers/MangaPreview/actions'
import Box from 'components/Box'
import { makeSelectIllust } from 'containers/IllustById/selectors'
import createMenu from './createMenu'
import * as selectors from './selectors'

type Props = {
  illust: Illust,
  user: User,
  isIllustOnly: boolean,
  isShowCaption: boolean,
  openUserDrawer: (userId: number) => void,
  openPreview: (type: 'illust' | 'manga') => void,
  addColumnSearchIllust: Function,
  // for context menu
  dispatch: Dispatch,
}

class BoxContainer extends React.PureComponent {
  props: Props

  handleTagClick = (tag: string) => {
    this.props.addColumnSearchIllust(tag)
  }

  handleContextMenu = (e: Event) => {
    e.preventDefault()

    const { dispatch, illust } = this.props

    const menu = createMenu({ dispatch, illust })
    // $FlowFixMe
    menu.popup(remote.getCurrentWindow())
  }

  render() {
    const { openPreview, openUserDrawer, illust } = this.props

    return (
      <Box
        id={illust.id}
        onClick={openPreview}
        onClickUser={openUserDrawer}
        onClickTag={this.handleTagClick}
        onContextMenu={this.handleContextMenu}
        {...this.props}
      />
    )
  }
}

type OP = {
  id: number,
}

const mapStateToProps = createStructuredSelector({
  illust: makeSelectIllust(),
  user: selectors.makeSelectUser(),
  isShowCaption: selectors.makeSelectIsIllustOnly(),
  isIllustOnly: selectors.makeSelectIsShowOnlyIllust(),
})

const mapDispatchToProps = (dispatch: Dispatch, { id }) => {
  return {
    dispatch,
    openPreview(type: 'illust' | 'manga') {
      if (type === 'illust') {
        dispatch(openIllustViewer(id))
      } else if (type === 'manga') {
        dispatch(openMangaPreview(id))
      }
    },
    openUserDrawer(userId: number) {
      dispatch(openDrawer(userId))
    },
    addColumnSearchIllust(tag: string) {
      dispatch(addColumn(tag))
    },
  }
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(BoxContainer)
