// @flow
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import type { State, Dispatch } from 'types'
import {
  addTagFilter,
  removeTagFilter,
  setCaptionShow,
  setOnlyIllust,
} from 'actions'
import { changeLocale } from 'containers/LanguageProvider/actions'
import Modal from './SettingModal'
import type { Props } from './SettingModal'

const mapStateToProps = ({ filter, config, language }: State) => ({
  locale: language.locale,
  tags: filter.tags,
  isIllustComment: config.isIllustComment,
  isIllustOnly: config.isIllustOnly,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (tag: string) => dispatch(addTagFilter(tag)),
  onDelete: (tag: string) => dispatch(removeTagFilter(tag)),
  onCheckShowText: (isShow: boolean) => dispatch(setCaptionShow(isShow)),
  onSelectLanguage: (locale: string) => dispatch(changeLocale(locale)),
  onCheckIllustOnly: (isShow: boolean) => dispatch(setOnlyIllust(isShow)),
})

const connector: Connector<*, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(Modal)
