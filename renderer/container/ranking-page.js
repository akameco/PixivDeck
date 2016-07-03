// @flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import type {State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {RankingModeType} from '../actions/';
import type {ManageStateType} from '../actions/type';
import {changeRankingMode, nextRankingPage, fetchRanking} from '../actions/ranking';
import {currentWork} from '../actions';
import {openModal} from '../actions/modal';
import RankingList from '../components/ranking-list';
import Infinite from '../components//infinite';
import styles from './ranking-page.css';

type Props = {
	works: Array<Object>,
	mode: RankingModeType,
	manage: ManageStateType,
	ranking: () => void,
	currentWork: (id: string) => Object,
	openModal: typeof openModal,
	changeRankingMode: (mode: RankingModeType) => void,
	nextRankingPage: () => void,
	params: Object
};

function t(mode: RankingModeType) {
	const map = {
		daily: 'デイリー',
		weekly: 'ウィークリー',
		monthly: 'マンスリー'
	};
	return map[mode];
}

class RankingPage extends Component {
	props: Props;

	componentWillMount() {
		this.props.changeRankingMode(this.props.params.mode);
	}

	componentWillReceiveProps(nextProps: Props) {
		if (nextProps.params.mode === this.props.params.mode) {
			return;
		}
		this.props.changeRankingMode(nextProps.params.mode);
	}

	handleOnNextPage = () => {
		this.props.nextRankingPage();
	};

	handleOnClickWork = (id :string) => {
		this.props.currentWork(id);
		this.props.openModal();
		this.scrollStop();
	};

	scrollStop() {
		const body = document.querySelector('body');
		body.style.overflow = 'hidden';
	}

	render() {
		const {works, mode, manage} = this.props;
		const arr = manage.rankingIds.map(v => works[v]);
		return (
			<div>
				<h1>{t(mode)}ランキング</h1>
				{arr.length > 0 &&
					<Infinite onIntersect={this.handleOnNextPage}>
						<RankingList works={arr} onClick={this.handleOnClickWork}/>
					</Infinite>
					}
			</div>
		);
	}
}

function mapStateToProps(state: State, ownProps: Props) {
	const {mode} = ownProps.params;
	const {entities, manage} = state;
	const {works} = entities;

	return {
		mode,
		works,
		manage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		openModal,
		ranking: fetchRanking,
		currentWork,
		changeRankingMode,
		nextRankingPage
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(RankingPage, styles));
