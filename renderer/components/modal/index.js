// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {State, Dispatch, Manage, ModalType, Query, Filter, History} from '../../types';
import {closeModal, addTagFilter, removeTagFilter, setR18, addColumn, addHistoryColumn} from '../../actions';
import ModalWrapper from './modal-wrapper';
import SelectColumnModal from './select-column-modal';
import SettingFilterModal from './setting-filter-modal';
import SearchModal from './search-modal';

type Props = {
	manage: Manage,
	filter: Filter,
	history: History,
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

	handleSetR18 = (show: bool) => {
		this.props.dispatch(setR18(show));
	}

	handleHistory = () => {
		this.props.dispatch(addHistoryColumn(this.props.history));
	}

	renderModal(type: ModalType) {
		if (type === 'ADD_COLUMN') {
			return (
				<SelectColumnModal
					onClickHistory={this.handleHistory}
					onSelect={this.handleAddColumn}
					/>
			);
		} else if (type === 'FILTER_TAG') {
			return (
				<SettingFilterModal
					tags={this.props.filter.tags}
					r18={this.props.filter.r18}
					onDelete={this.handleRemoveTagFilter}
					onSubmit={this.handleAddTagFilter}
					onSelectR18={this.handleSetR18}
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
				onClickHistory={this.handleHistory}
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
		filter: state.filter,
		modalType: state.manage.modalType,
		history: state.history
	};
}

export default connect(mapStateToProps)(Modal);
