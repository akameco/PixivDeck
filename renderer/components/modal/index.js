// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {State, Dispatch, Manage, ModalType, Query} from '../../types';
import {closeModal, addTagFilter, removeTagFilter} from '../../actions/manage';
import {addColumn} from '../../actions/column';
import ModalWrapper from './modal-wrapper';
import SelectColumnModal from './select-column-modal';
import SettingFilterModal from './setting-filter-modal';
import SearchModal from './search-modal';

type Props = {
	manage: Manage,
	modalType: ModalType,
	dispatch: Dispatch
};

class Modal extends Component {
	props: Props;

	handleOnCloseModal = () => {
		this.props.dispatch(closeModal());
	}

	handleAddColumn = (
		query: Query,
		title : string = ''
	) => {
		this.props.dispatch(addColumn(query, title));
	};

	handleAddTagFilter = (tag: string) => {
		this.props.dispatch(addTagFilter(tag));
	}

	handleRemoveTagFilter = (tag: string) => {
		this.props.dispatch(removeTagFilter(tag));
	}

	handleSearchSubmit = (tag: string) => {
		this.props.dispatch(addColumn({type: 'search', q: tag, opts: {page: 1}}, tag));
	}

	renderModal(type: ModalType) {
		if (type === 'ADD_COLUMN') {
			return (
				<SelectColumnModal
					onSelect={this.handleAddColumn}
					/>
			);
		} else if (type === 'FILTER_TAG') {
			return (
				<SettingFilterModal
					tags={this.props.manage.filter.tags}
					onDelete={this.handleRemoveTagFilter}
					onSubmit={this.handleAddTagFilter}
					/>
			);
		} else if (type === 'SEARCH') {
			return (
				<SearchModal onSubmit={this.handleSearchSubmit}/>
			);
		}
		return (
			<SelectColumnModal
				onSelect={this.handleAddColumn}
				/>
		);
	}

	render() {
		return (
			<ModalWrapper onClose={this.handleOnCloseModal} title={"select"}>
				{this.renderModal(this.props.modalType)}
			</ModalWrapper>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		manage: state.manage,
		modalType: state.manage.modalType
	};
}

export default connect(mapStateToProps)(Modal);
