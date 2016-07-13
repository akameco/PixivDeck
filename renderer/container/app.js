// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {Manage, WorkType, WorksType, ColumnType, UserType} from '../actions/type';
import {currentWork} from '../actions';
import {
	closeModal,
	closeImageView,
	openImageView,
	login
} from '../actions/manage';
import {addColumn, nextPage, closeColumn} from '../actions/column';
import type {query} from '../actions/column';
import Auth from '../components/auth/';
import ImageModal from '../components/image-modal';
import Modal from '../components/modal/';
import SelectColumnModal from '../components/modal/select-column-modal';
import Header from '../components/header/';
import Column from '../components/column/';
import styles from './app.css';

type Props = {
	children: any,
	work: WorkType,
	works: WorksType,
	users: UserType,
	columns: Array<ColumnType>,
	manage: Manage,
	dispatch: Dispatch
};

class App extends Component {
	props: Props;

	componentWillMount() {
		this.props.dispatch({type: 'INIT'});
	}

	handleAddColumn = (
		query: query,
		title : string = ''
	) => {
		this.props.dispatch(addColumn(query, title));
	};

	handleCloseModal = () => {
		this.props.dispatch(closeImageView());
	};

	handleOnClickWork = (id: number) => {
		this.props.dispatch(currentWork(id));
		this.props.dispatch(openImageView());
	}

	handleOnNextPage = (id: number) => {
		this.props.dispatch(nextPage(id));
	}

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

	handleCloseColumn = (id: number) => {
		this.props.dispatch(closeColumn(id));
	}

	handleTagClick = (tag: string) => {
		this.props.dispatch(addColumn({type: 'search', q: tag, opts: {page: 1}}, tag));
	}

	handleAuth = (name: string, password: string) => {
		this.props.dispatch(login(name, password));
	}

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
		const {columns, works, users, manage} = this.props;
		return columns.map(column => {
			if (!column.works) {
				return null;
			}
			const {tags} = manage.filter;
			const workList = column.works
				.map(i => works[i])
				.filter(work => work.tags.every(tag => tags.every(t => t !== tag)));

			return (
				<Column
					key={column.id}
					id={column.id}
					column={column}
					users={users}
					works={workList}
					onClose={this.handleCloseColumn}
					onNextPage={this.handleOnNextPage}
					onClickTag={this.handleTagClick}
					onClickWork={this.handleOnClickWork}
					/>
			);
		});
	}

	renderModal() {
		if (!this.props.manage.isModal) {
			return;
		}
		return (
			<Modal
				title={'カラムの追加'}
				onClose={this.handleOnCloseModal}
				>
				<SelectColumnModal
					onSelect={this.handleAddColumn}
					/>
			</Modal>
		);
	}

	render() {
		if (!this.props.manage.isLogin) {
			return <Auth onClick={this.handleAuth}/>;
		}

		return (
			<div styleName="wrap">
				<Header/>
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
	const {works, users} = entities;
	const work = works[manage.currentWorkId] || null;

	return {
		work,
		works,
		users,
		manage,
		columns
	};
}

export default connect(mapStateToProps)(cssModules(styles)(App));
