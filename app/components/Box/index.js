// @flow
import { remote, type electron$Menu } from 'electron'
import React, { Component } from 'react'
import { download } from 'electron-dl'
import { connect, type Connector } from 'react-redux'
import type { Dispatch, State } from 'types/'
import type { Illust } from 'types/illust'
import type { User } from 'types/user'
import { getUser } from 'reducers'
import {
  openImageView,
  openMangaPreview,
  setCurrentIllust,
  openUserDrawer,
  addBookmark,
  shareTwitter,
  openPixiv,
} from 'actions'
import { addColumnSearchIllust } from '../../containers/SearchField/actions'
import Box from './Box'

// $FlowFixMe
const { Menu, MenuItem } = remote

type Props = {
  illust: Illust,
  user: User,
  isIllustOnly: boolean,
  isIllustComment: boolean,
  openUserDrawer: () => void,
  openPreview: () => void,
  addColumnSearchIllust: Function,
  addBookmark: (isPublic: boolean) => void,
  openPixiv: () => void,
  shareTwitter: (id: number) => void,
}

class BoxContainer extends Component {
  props: Props

  handleTagClick = (tag: string) => {
    this.props.addColumnSearchIllust(tag)
  }

  handleContextMenu = (e: Event) => {
    e.preventDefault()

    const {
      illust,
      addBookmark,
      openPixiv,
      openUserDrawer,
      shareTwitter,
    } = this.props

    const menu = new Menu()

    menu.append(
      new MenuItem({
        label: 'オリジナルサイズの画像を保存',
        click(item, win) {
          const img = illust.metaSinglePage.originalImageUrl
          download(win, img ? img : illust.imageUrls.large)
        },
      }),
    )

    menu.append(new MenuItem({ type: 'separator' }))

    menu.append(
      new MenuItem({
        label: 'このユーザの情報を見る',
        click() {
          openUserDrawer()
        },
      }),
    )

    menu.append(new MenuItem({ type: 'separator' }))

    menu.append(
      new MenuItem({
        label: 'ブックマーク',
        click() {
          addBookmark(true)
        },
      }),
    )

    menu.append(
      new MenuItem({
        label: '非公開ブックマーク',
        click() {
          addBookmark(false)
        },
      }),
    )

    menu.append(new MenuItem({ type: 'separator' }))

    menu.append(
      new MenuItem({
        label: 'Twitterで共有',
        click() {
          shareTwitter(illust.id)
        },
      }),
    )

    menu.append(
      new MenuItem({
        label: 'pixivで開く',
        click() {
          openPixiv()
        },
      }),
    )

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
      isIllustComment,
    } = this.props

    return (
      <Box
        user={user}
        illust={illust}
        isIllustOnly={isIllustOnly}
        isIllustComment={isIllustComment}
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
  isIllustOnly: state.config.isIllustOnly,
  isIllustComment: state.config.isIllustComment,
})

const mapDispatchToProps = (dispatch: Dispatch, { illust }) => {
  const illustId = illust.id
  const userId = illust.user
  return {
    openPreview() {
      dispatch(setCurrentIllust(illustId))
      if (illust.pageCount > 1) {
        dispatch(openMangaPreview())
      } else {
        dispatch(openImageView())
      }
    },
    addBookmark(isPublic: boolean) {
      dispatch(addBookmark(illustId, isPublic))
    },
    openUserDrawer() {
      dispatch(openUserDrawer(userId))
    },
    addColumnSearchIllust(tag: string) {
      dispatch(addColumnSearchIllust(tag))
    },
    openPixiv() {
      dispatch(openPixiv(illustId))
    },
    shareTwitter() {
      dispatch(shareTwitter(illustId))
    },
  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default connector(BoxContainer)
