// @flow
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {State, Dispatch} from '../../types'
import {
	addTagFilter,
	removeTagFilter,
	setCaptionShow,
	setOnlyIllust,
} from '../../actions'
import Modal from './SettingModal'
import type {Props} from './SettingModal'

const mapStateToProps = ({filter, config}: State) => ({
	tags: filter.tags,
	isIllustComment: config.isIllustComment,
	isIllustOnly: config.isIllustOnly,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onSubmit(tag: string) {
		dispatch(addTagFilter(tag))
	},
	onDelete(tag: string) {
		dispatch(removeTagFilter(tag))
	},
	onCheckShowText(isShow: bool) {
		dispatch(setCaptionShow(isShow))
	},
	onCheckIllustOnly(isShow: bool) {
		dispatch(setOnlyIllust(isShow))
	},
})

const connector: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps)

export default connector(Modal)
