// @flow
import {connect} from 'react-redux'
import type {State, Dispatch} from '../../../types'
import {
	addTagFilter,
	removeTagFilter,
	setCaptionShow,
	setOnlyIllust,
} from '../../../actions'
import Modal from './SettingModal'

function mapStateToProps(state: State) {
	const {isIllustComment, isIllustOnly} = state.config
	const {tags} = state.filter
	return {
		tags,
		isIllustComment,
		isIllustOnly,
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit: (tag: string) => dispatch(addTagFilter(tag)),
		onDelete: (tag: string) => dispatch(removeTagFilter(tag)),
		onCheckShowText: (isShow: bool) => dispatch(setCaptionShow(isShow)),
		onCheckIllustOnly: (isShow: bool) => dispatch(setOnlyIllust(isShow)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
