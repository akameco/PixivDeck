// @flow
import { remote } from 'electron'
import { download } from 'electron-dl'
import type { Dispatch } from 'types/'
import type { Illust } from 'types/illust'
import { openDrawer } from 'containers/DrawerManager/actions'
import { addBookmarkRequest as addBookmark } from 'containers/BookmarkButton/actions'
import { openPixiv } from './actions'

// $FlowFixMe
const { Menu, MenuItem } = remote

export default function createMenu({
  dispatch,
  illust,
}: {
  dispatch: Dispatch,
  illust: Illust,
}) {
  const menu = new Menu()

  menu.append(
    new MenuItem({
      label: 'オリジナルサイズの画像を保存',
      click(item, win) {
        const img = illust.metaSinglePage.originalImageUrl
        download(win, img ? img : illust.imageUrls.large)
      },
    })
  )

  menu.append(new MenuItem({ type: 'separator' }))

  menu.append(
    new MenuItem({
      label: 'このユーザの情報を見る',
      click() {
        dispatch(openDrawer(illust.user))
      },
    })
  )

  menu.append(new MenuItem({ type: 'separator' }))

  menu.append(
    new MenuItem({
      label: 'ブックマーク',
      click() {
        dispatch(addBookmark(illust.id, 'public'))
      },
    })
  )

  menu.append(
    new MenuItem({
      label: '非公開ブックマーク',
      click() {
        dispatch(addBookmark(illust.id, 'private'))
      },
    })
  )

  menu.append(new MenuItem({ type: 'separator' }))

  menu.append(
    new MenuItem({
      label: 'pixivで開く',
      click() {
        dispatch(openPixiv(illust.id))
      },
    })
  )

  return menu
}
