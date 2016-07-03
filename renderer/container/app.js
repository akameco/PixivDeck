// @flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import type {State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {RankingModeType, ManageStateType} from '../actions/type';
import {ranking, currentWork, changeRankingMode, nextRankingPage} from '../actions';
import {openModal, closeModal} from '../actions/modal';
import ImageModal from '../components/image-modal';
import RankingPage from '../components/ranking-page';
import styles from './app.css';

type Props = {
	work: Object,
	works: Object,
	worksArray: Array<Object>,
	manage: ManageStateType,
	currentWorkId: number | null,
	ranking: typeof ranking,
	openModal: typeof openModal,
	closeModal: typeof closeModal,
	currentWork: (id: string) => Object,
	changeRankingMode: (mode: RankingModeType) => void,
	nextRankingPage: (page: number) => void
};

type AppState = {
	img: ?string,
	page: number
};

class App extends Component {
	props: Props;
	state: AppState;
	sentinel: Component;

	constructor(props: Props) {
		super(props);
		this.state = {
			work: null,
			img: null,
			page: 1
		};
	}

	handleOnNextPage = () => {
		const {rankingMode, rankingPage} = this.props.manage;
		this.props.ranking(rankingMode, rankingPage);
		this.props.nextRankingPage(rankingPage);
	};

	handleOnRanking = (mode: RankingModeType) => {
		this.props.ranking(mode);
	};

	handleClickWork = (id :string) => {
		this.props.currentWork(id);
		this.selectWork();
		this.props.openModal();
		this.scrollStop();
	};

	handleChangeRankingMode = (mode: RankingModeType) => {
		if (mode === this.props.manage.rankingMode) {
			return;
		}
		this.props.changeRankingMode(mode);
	};

	selectWork(works, currentWorkId) {
		if (works && currentWorkId) {
			return works.filter(work => work.id === currentWorkId)[0];
		}
	}

	handleCloseModal = () => {
		this.props.closeModal();
		const body = document.querySelector('body');
		body.style.overflow = 'auto';
	};

	scrollStop() {
		const body = document.querySelector('body');
		body.style.overflow = 'hidden';
	}

	render() {
		const {works, manage, currentWorkId, worksArray} = this.props;
		return (
			<div>
				<RankingPage
					works={worksArray}
					mode={manage.rankingMode}
					onRanking={this.handleChangeRankingMode}
					onNextPage={this.handleOnNextPage}
					onClickWork={this.handleClickWork}
					/>
				{currentWorkId && works[currentWorkId] && manage.isModal &&
					<ImageModal
						show={manage.isModal}
						img={works[currentWorkId].imageUrls.px480mw}
						onClose={() => this.handleCloseModal()}
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
		ranking,
		currentWork,
		openModal,
		closeModal,
		changeRankingMode,
		nextRankingPage
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles)(App));
