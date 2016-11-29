// @flow
import {connect} from 'react-redux';
import type {State, Dispatch} from '../../../types';
import {addTagFilter, removeTagFilter} from '../../../actions';
import Modal from './setting-modal';

function mapStateToProps(state: State) {
	const {tags} = state.filter;
	return {tags};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit: (tag: string) => dispatch(addTagFilter(tag)),
		onDelete: (tag: string) => dispatch(removeTagFilter(tag)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
