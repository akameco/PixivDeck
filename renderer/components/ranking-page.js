// @flow
import React, {Component} from 'react';
import type {RankingModeType} from '../actions/';
import RankingList from './ranking-list';
import Infinite from './infinite';

type Props = {
	works: Array<Object>,
	mode: RankingModeType,
	onRanking: (mode: RankingModeType) => void,
	onClickWork: (id: string) => void,
	onNextPage: () => void
};

function mapMode(mode: RankingModeType) {
	const map = {
		daily: 'デイリー',
		weekly: 'ウィークリー',
		monthly: 'マンスリー'
	};
	return map[mode];
}

export default class RankingPage extends Component {
	props: Props;

	render() {
		const {works, onClickWork, onNextPage, onRanking, mode} = this.props;
		return (
			<div>
				<h1>{mapMode(mode)}ランキング</h1>
				<a onClick={() => onRanking('daily')}>デイリー</a>
				<a onClick={() => onRanking('weekly')}>ウィークリー</a>
				<a onClick={() => onRanking('monthly')}>マンスリー</a>
				<Infinite onIntersect={onNextPage}>
					<RankingList works={works} onClick={onClickWork}/>
				</Infinite>
			</div>
		);
	}
}
