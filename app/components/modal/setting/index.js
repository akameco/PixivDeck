// @flow
import {connect} from 'react-redux';
import type {State, Dispatch} from '../../../types';
import {addTagFilter, removeTagFilter, setR18} from '../../../actions';
import Modal from './setting-modal';

function mapStateToProps(state: State) {
	const {tags, r18} = state.filter;
	return {
		tags,
		r18
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit: (tag: string) => dispatch(addTagFilter(tag)),
		onDelete: (tag: string) => dispatch(removeTagFilter(tag)),
		onSelectR18: (isShow: bool) => dispatch(setR18(isShow))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
