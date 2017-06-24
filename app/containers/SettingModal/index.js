// @flow
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import type { State, Dispatch } from 'types'
import { addTagFilter, removeTagFilter } from 'actions'
import { changeLocale } from 'containers/LanguageProvider/actions'
import { setShowCaption, setShowOnlyIllust } from './actions'
import Modal from './SettingModal'
import type { Props } from './SettingModal'
// import {
//   makeSelectIsShowCaption,
//   makeSelectIsShowOnlyIllust,
// } from './selectors'

const mapStateToProps = ({ filter, language, SettingModal }: State) => ({
  locale: language.locale,
  tags: filter.tags,
  isIllustComment: SettingModal.isShowCaption,
  isIllustOnly: SettingModal.isShowOnlyIllust,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (tag: string) => dispatch(addTagFilter(tag)),
  onDelete: (tag: string) => dispatch(removeTagFilter(tag)),
  onSelectLanguage: (locale: string) => dispatch(changeLocale(locale)),
  onCheckShowText: (show: boolean) => dispatch(setShowCaption(show)),
  onCheckIllustOnly: (show: boolean) => dispatch(setShowOnlyIllust(show)),
})

const connector: Connector<*, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(Modal)
