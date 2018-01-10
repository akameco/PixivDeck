// @flow
import type { Saga } from 'redux-saga'
import { select, takeEvery } from 'redux-saga/effects'
import type { Illust } from 'types/illust'
import type { User } from 'types/user'
import { getSelectIllust } from '../IllustById/selectors'
import { getSelectUser } from '../UserById/selectors'
import * as Actions from './constants'

const { shell } = require('electron')

type Notify = {
  title: string,
  icon: string,
  body: string,
  url?: string,
}

export function notify({ title, url, body, icon }: Notify) {
  const notify = new Notification(title, {
    icon,
    body,
  })

  notify.onclick = () => {
    if (url) {
      shell.openExternal(url)
    }
  }
}

type NotifyWithIllust = {
  title: string,
  id: number,
}

const baseUrl = 'https://www.pixiv.net/member_illust.php?mode=medium&illust_id='

export function* notifyWithIllust({ title, id }: NotifyWithIllust): Saga<void> {
  const illust: Illust = yield select(getSelectIllust, { id })
  if (!illust) {
    return
  }

  const user: User = yield select(getSelectUser, { id: illust.user })
  if (!user) {
    return
  }

  const icon = illust.imageUrls.squareMedium

  notify({
    title,
    icon,
    body: `${user.name} / ${illust.title}`,
    url: `${baseUrl}${illust.id}`,
  })
}

function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_NOTIFY_WITH_ILLUST, notifyWithIllust)
}

export default root
