// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {Manage, WorkType, WorksType} from '../actions/type';
import {closeModal, closeImageView} from '../actions/manage';
import {addColumn} from '../actions/column';
import ImageModal from '../components/image-modal';
import Modal from '../components/modal';
import Column from './column';
import styles from './app.css';

type Props = {
	children: any,
	work: WorkType,
	works: WorksType,
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

	handleCloseModal = () => {
		this.props.dispatch(closeImageView());
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

	render() {
		return (
			<div styleName="wrap">
				<Column id={1}/>
				<Column id={2}/>
				<Column id={3}/>
				{this.renderImageView()}
				{this.props.manage.isModal &&
					<Modal onClose={this.handleOnCloseModal}/>
				}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, manage} = state;
	const {works} = entities;
	const work = works[manage.currentWorkId] || null;

	return {
		work,
		works,
		manage
	};
}

export default connect(mapStateToProps)(cssModules(styles)(App));
