import { remote } from 'electron'
import * as React from 'react'
import { connect, Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import { Illust } from 'types/illust'
import { User } from 'types/user'
import { injectIntl, IntlShape } from 'react-intl'
import { openDrawer } from 'containers/DrawerManager/actions'
import { openIllustViewer } from 'containers/IllustPreview/actions'
import { addColumn } from 'containers/ColumnSearch/actions'
import { openMangaPreview } from 'containers/MangaPreview/actions'
import Box from 'components/Box'
import { makeSelectIllust } from 'containers/IllustById/selectors'
import createMenu from './createMenu'
import * as selectors from './selectors'

interface Props {
  illust: Illust
  user: User
  isIllustOnly: boolean
  isShowCaption: boolean
  openUserDrawer: (userId: number) => undefined
  openPreview: (type: 'illust' | 'manga') => undefined
  addColumnSearchIllust: Function
  dispatch: Dispatch
}

class BoxContainer extends React.Component<
  Props & {
    intl: IntlShape
  }
> {
  shouldComponentUpdate(nextProps: Props) {
    const { illust, isIllustOnly, isShowCaption } = this.props
    const nextIllust = nextProps.illust

    if (nextIllust.isBookmarked !== illust.isBookmarked) {
      return true
    } else if (nextIllust.totalBookmarks !== illust.totalBookmarks) {
      return true
    } else if (nextProps.isShowCaption !== isShowCaption) {
      return true
    } else if (nextProps.isIllustOnly !== isIllustOnly) {
      return true
    }

    return false
  }

  handleTagClick = (tag: string) => {
    this.props.addColumnSearchIllust(tag)
  }
  handleContextMenu = (e: Event) => {
    e.preventDefault()
    const { dispatch, illust, intl } = this.props
    const menu = createMenu({
      dispatch,
      illust,
      intl,
    }) // $FlowFixMe

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

interface OP {
  id: number
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
export default connector(injectIntl(BoxContainer))
