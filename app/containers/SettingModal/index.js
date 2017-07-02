// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import { changeLocale } from 'containers/Language/actions'
import { makeSelectLocale } from '../Language/selectors'
import {
  setShowCaption,
  setShowOnlyIllust,
  addTagFilter,
  removeTagFilter,
  removeCache,
} from './actions'
import Modal from './SettingModal'
import type { Props } from './SettingModal'
import {
  makeSelectIsShowCaption,
  makeSelectIsShowOnlyIllust,
  makeSelectTags,
} from './selectors'

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  tags: makeSelectTags(),
  isShowCaption: makeSelectIsShowCaption(),
  isIllustOnly: makeSelectIsShowOnlyIllust(),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (tag: string) => dispatch(addTagFilter(tag)),
  onDelete: (tag: string) => dispatch(removeTagFilter(tag)),
  onSelectLanguage: (locale: string) => dispatch(changeLocale(locale)),
  onCheckShowText: (show: boolean) => dispatch(setShowCaption(show)),
  onCheckIllustOnly: (show: boolean) => dispatch(setShowOnlyIllust(show)),
  onRemoveCache() {
    dispatch(removeCache())
  },
})

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(Modal)
