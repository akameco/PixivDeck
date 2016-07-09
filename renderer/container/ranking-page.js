// @flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import type {State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {RankingModeType} from '../actions/';
import type {WorkType, UserType} from '../actions/type';
import type {ManageStateType} from '../reducers/manage';
import {changeRankingMode, nextRankingPage} from '../actions/ranking';
import {currentWork} from '../actions';
import {openModal} from '../actions/modal';
import RankingList from '../components/ranking-list';
import Infinite from '../components/infinite';
import styles from './ranking-page.css';

type Props = {
	works: Array<WorkType>,
	users: Array<UserType>,
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
	};

	render() {
		const {works, mode, manage, users} = this.props;
		const arr = manage.rankingIds.map(v => works[v]);
		return (
				<h1>{t(mode)}ランキング</h1>
			<div styleName="base">
				{arr.length > 0 &&
					<Infinite onIntersect={this.handleOnNextPage}>
						<RankingList works={arr} users={users} onClick={this.handleOnClickWork}/>
					</Infinite>
					}
			</div>
		);
	}
}

function mapStateToProps(state: State, ownProps: Props) {
	const {mode} = ownProps.params;
	const {entities, manage} = state;
	const {works, users} = entities;

	return {
		mode,
		works,
		users,
		manage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		openModal,
		currentWork,
		changeRankingMode,
		nextRankingPage
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(RankingPage, styles));
