// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: number,
}

const getSelectUserById = (s: State) => s.userById

const getSelectIllust = (s: State, { id }: Props) => s.illustById[id]

export const makeSelectIllust = () => createSelector(getSelectIllust, s => s)

const makeSelectIllustUserId = () =>
  createSelector(makeSelectIllust(), s => s.user)

export const makeSelectUser = () =>
  createSelector(
    getSelectUserById,
    makeSelectIllustUserId(),
    (users, id) => users[id]
  )

const getSettingModal = (s: State) => s.SettingModal

export const makeSelectIsIllustOnly = () =>
  createSelector(getSettingModal, s => s.isShowCaption)

export const makeSelectIsShowOnlyIllust = () =>
  createSelector(getSettingModal, s => s.isShowOnlyIllust)
