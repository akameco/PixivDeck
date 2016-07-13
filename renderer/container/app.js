// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {Manage, WorksType, ColumnType} from '../actions/type';
import {closeModal, login} from '../actions/manage';
import {addColumn} from '../actions/column';
import type {query} from '../actions/column';
import Auth from '../components/auth/';
import IllustPreview from '../components/illust-preview/';
import Modal from '../components/modal/';
import SelectColumnModal from '../components/modal/select-column-modal';
import Header from '../components/header/';
import Column from '../components/column/';
import styles from './app.css';

type Props = {
	children: any,
	works: WorksType,
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

	handleAuth = (name: string, password: string) => {
		this.props.dispatch(login(name, password));
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

		const Columns = this.props.columns.map(column => (
			<Column key={column.id} column={column}/>
		));

		return (
			<div styleName="wrap">
				<Header/>
				<div styleName="content">
					{Columns}
				</div>
				{this.props.manage.isImageView && <IllustPreview/>}
				{this.renderModal()}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, manage, columns} = state;
	const {works} = entities;

	return {
		works,
		manage,
		columns
	};
}

export default connect(mapStateToProps)(cssModules(styles)(App));
