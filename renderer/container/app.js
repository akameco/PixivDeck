// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {ManageStateType, WorkType} from '../actions/type';
import {closeModal} from '../actions/modal';
import {addColumn} from '../actions/column';
import ImageModal from '../components/image-modal';
import Column from './column';
import styles from './app.css';

type Props = {
	children: any,
	work: WorkType,
	works: Object,
	manage: ManageStateType,
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
		this.props.dispatch(closeModal());
	};

	render() {
		const {works, manage} = this.props;

		return (
			<div styleName="wrap">
				<Column id={1}/>
				<Column id={2}/>
				<Column id={3}/>
				{manage.currentWorkId && works[manage.currentWorkId] && manage.isModal &&
					<ImageModal
						show={manage.isModal}
						img={works[manage.currentWorkId].imageUrls.large}
						onClose={this.handleCloseModal}
						/>
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
