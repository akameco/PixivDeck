import { remote } from 'electron'
import { download } from 'electron-dl'
import { IntlShape } from 'react-intl'
import { Dispatch } from 'types/'
import { Illust } from 'types/illust'
import { openDrawer } from 'containers/DrawerManager/actions'
import { addBookmarkRequest as addBookmark } from 'containers/BookmarkButton/actions'
import { openPixiv } from './actions'
import messages from './messages'

const { Menu, MenuItem } = remote

export default function createMenu({
  dispatch,
  illust,
  intl,
}: {
  dispatch: Dispatch
  illust: Illust
  intl: IntlShape
}) {
  const menu = new Menu()

  menu.append(
    new MenuItem({
      label: intl.formatMessage(messages.save),
      click(item, win) {
        const img = illust.metaSinglePage.originalImageUrl
        download(win, img ? img : illust.imageUrls.large)
      },
    })
  )

  menu.append(new MenuItem({ type: 'separator' }))

  menu.append(
    new MenuItem({
      label: intl.formatMessage(messages.showUser),
      click() {
        dispatch(openDrawer(illust.user))
      },
    })
  )

  menu.append(new MenuItem({ type: 'separator' }))

  menu.append(
    new MenuItem({
      label: intl.formatMessage(messages.bookmark),
      click() {
        dispatch(addBookmark(illust.id, 'public'))
      },
    })
  )

  menu.append(
    new MenuItem({
      label: intl.formatMessage(messages.privateBookmark),
      click() {
        dispatch(addBookmark(illust.id, 'private'))
      },
    })
  )

  menu.append(new MenuItem({ type: 'separator' }))

  menu.append(
    new MenuItem({
      label: intl.formatMessage(messages.openPixiv),
      click() {
        dispatch(openPixiv(illust.id))
      },
    })
  )

  return menu
}
