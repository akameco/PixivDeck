// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectSettingModal = (state: State) => state.SettingModal

const makeSelectIsShowCaption = () =>
  createSelector(selectSettingModal, state => state.isShowCaption)

const makeSelectIsShowOnlyIllust = () =>
  createSelector(selectSettingModal, state => state.isShowOnlyIllust)

export {
  selectSettingModal,
  makeSelectIsShowCaption,
  makeSelectIsShowOnlyIllust,
}
