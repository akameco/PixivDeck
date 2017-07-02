// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'
import { makeSelectIllust } from '../IllustById/selectors'
import { getUserById } from '../UserById/selectors'

const makeSelectIllustUserId = () =>
  createSelector(makeSelectIllust(), s => s.user)

export const makeSelectUser = () =>
  createSelector(
    getUserById,
    makeSelectIllustUserId(),
    (users, id) => users[id]
  )

const getSettingModal = (s: State) => s.SettingModal

export const makeSelectIsIllustOnly = () =>
  createSelector(getSettingModal, s => s.isShowCaption)

export const makeSelectIsShowOnlyIllust = () =>
  createSelector(getSettingModal, s => s.isShowOnlyIllust)
