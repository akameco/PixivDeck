// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {Manage, WorkType, WorksType, ColumnType} from '../actions/type';
import {openModal, closeModal, closeImageView} from '../actions/manage';
import {addColumn} from '../actions/column';
import ImageModal from '../components/image-modal';
import Modal from '../components/modal';
import SelectColumnModal from '../components/modal/select-column-modal';
import Header from '../components/header';
import Column from './column';
import styles from './app.css';

type Props = {
	children: any,
	work: WorkType,
	works: WorksType,
	columns: Array<ColumnType>,
	manage: Manage,
	dispatch: Dispatch
};

class App extends Component {
	props: Props;

	componentWillMount() {
		this.props.dispatch(addColumn(1, {type: 'ranking', opts: {mode: 'daily', page: 1}}, 'ranking/daily'));
		this.props.dispatch(addColumn(2, {type: 'ranking', opts: {mode: 'weekly', page: 1}}, 'ranking/weekly'));
		this.props.dispatch(addColumn(3, {type: 'ranking', opts: {mode: 'monthly', page: 1}}, 'ranking/monthly'));
	}

	handleAddColumn = (
		query: {type: string, opts: Object},
		title : string = ''
	) => {
		const id = this.props.columns.length;
		this.props.dispatch(addColumn(id + 1, query, title));
	};

	handleCloseModal = () => {
		this.props.dispatch(closeImageView());
	};

	handleOpenModal = () => {
		this.props.dispatch(openModal());
	};

	isImageModal(): bool {
		const {currentWorkId, isImageView} = this.props.manage;
		if (isImageView && currentWorkId && this.props.works[currentWorkId]) {
			return true;
		}
		return false;
	}

	handleOnCloseModal = () => {
		this.props.dispatch(closeModal());
	};

	renderImageView() {
		const {works, manage} = this.props;
		const {currentWorkId, isImageView} = manage;
		if (isImageView && currentWorkId && this.props.works[currentWorkId]) {
			return (
				<ImageModal
					show={isImageView}
					img={works[currentWorkId].imageUrls.large}
					onClose={this.handleCloseModal}
					/>
			);
		}
		return null;
	}

	renderColumns() {
		const columns = this.props.columns.map(v =>
			<Column key={v.id} id={v.id}/>
		);
		return columns;
	}

	renderModal() {
		if (!this.props.manage.isModal) {
			return;
		}
		return (
			<Modal
				title={'ランキング'}
				onClose={this.handleOnCloseModal}
				>
				<SelectColumnModal
					onSelect={this.handleAddColumn}
					/>
			</Modal>
		);
	}

	render() {
		return (
			<div styleName="wrap">
				<Header
					onOpenModal={this.handleOpenModal}
					/>
				<div styleName="content">
					{this.renderColumns()}
				</div>
				{this.renderImageView()}
				{this.renderModal()}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, manage, columns} = state;
	const {works} = entities;
	const work = works[manage.currentWorkId] || null;

	return {
		work,
		works,
		manage,
		columns
	};
}

export default connect(mapStateToProps)(cssModules(styles)(App));
