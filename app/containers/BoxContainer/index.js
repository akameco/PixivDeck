// @flow
import { remote } from 'electron'
import React, { Component } from 'react'
import { connect, type Connector } from 'react-redux'
import type { Dispatch, State } from 'types/'
import type { Illust } from 'types/illust'
import type { User } from 'types/user'
import { getUser } from 'reducers'
import { openDrawer } from 'containers/DrawerManager/actions'
import { openIllustViewer } from 'containers/IllustPreview/actions'
import { addColumnSearchIllust } from 'containers/SearchField/actions'
import { openMangaPreview } from 'containers/MangaPreview/actions'
import Box from 'components/Box'
import createMenu from './createMenu'

type Props = {
  illust: Illust,
  user: User,
  isIllustOnly: boolean,
  isShowCaption: boolean,
  openUserDrawer: () => void,
  openPreview: () => void,
  addColumnSearchIllust: Function,
  dispatch: Dispatch,
}

class BoxContainer extends Component {
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
    const {
      user,
      illust,
      isIllustOnly,
      openPreview,
      openUserDrawer,
      isShowCaption,
    } = this.props

    return (
      <Box
        user={user}
        illust={illust}
        isIllustOnly={isIllustOnly}
        isShowCaption={isShowCaption}
        onClick={openPreview}
        onClickUser={openUserDrawer}
        onClickTag={this.handleTagClick}
        onContextMenu={this.handleContextMenu}
      />
    )
  }
}

type OwnProps = {
  illust: Illust,
}

const mapStateToProps = (state: State, { illust }) => ({
  user: getUser(state, illust.user),
  isIllustOnly: state.SettingModal.isShowOnlyIllust,
  isShowCaption: state.SettingModal.isShowCaption,
})

const mapDispatchToProps = (dispatch: Dispatch, { illust }) => {
  const illustId = illust.id
  const userId = illust.user
  return {
    dispatch,
    openPreview() {
      // dispatch(setCurrentIllust(illustId))
      if (illust.pageCount > 1) {
        dispatch(openMangaPreview(illustId))
      } else {
        dispatch(openIllustViewer(illustId))
      }
    },
    openUserDrawer() {
      dispatch(openDrawer(userId))
    },
    addColumnSearchIllust(tag: string) {
      dispatch(addColumnSearchIllust(tag))
    },
  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(BoxContainer)
