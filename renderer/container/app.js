// @flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import type {State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import {Link} from 'react-router';
import type {RankingModeType, ManageStateType} from '../actions/type';
import {currentWork} from '../actions';
import {openModal, closeModal} from '../actions/modal';
import ImageModal from '../components/image-modal';
import styles from './app.css';

type Props = {
	children: any,
	work: Object,
	works: Object,
	worksArray: Array<Object>,
	manage: ManageStateType,
	currentWorkId: number | null,
	openModal: typeof openModal,
	closeModal: typeof closeModal,
	currentWork: (id: string) => Object,
	changeRankingMode: (mode: RankingModeType) => void,
	nextRankingPage: (page: number) => void
};

class App extends Component {
	props: Props;
	sentinel: Component;

	handleCloseModal = () => {
		this.props.closeModal();
	};

	render() {
		const {works, manage, currentWorkId} = this.props;
		const rankingLinks = ['daily', 'weekly', 'monthly'].map(mode => (
			<Link key={mode} to={`/ranking/${mode}`}>{mode}</Link>
		));
		return (
			<div>
				{rankingLinks}
				{this.props.children}
				{currentWorkId && works[currentWorkId] && manage.isModal &&
					<ImageModal
						show={manage.isModal}
						img={works[currentWorkId].imageUrls.px480mw}
						onClose={this.handleCloseModal}
						/>
				}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, pixiv, result, manage} = state;
	const {works} = entities;
	const work = works[pixiv.currentWorkId] || null;
	const worksArray = manage.rankingIds.map(v => works[v]);

	return {
		work,
		works,
		result,
		worksArray,
		currentWorkId: pixiv.currentWorkId,
		manage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		currentWork,
		openModal,
		closeModal
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles)(App));
