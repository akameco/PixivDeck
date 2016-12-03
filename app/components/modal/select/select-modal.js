// @flow
import React, {Component} from 'react'
import type {Query, Endpoint} from '../../../types/column'
import styles from './select-modal.css'

/* eslint-disable camelcase */
const illustRanking = {
	day: 'デイリー',
	week: 'ウィークリー',
	month: 'マンスリー',
	day_male: '男子に人気',
	day_female: '女子に人気',
	week_rookie: 'ルーキー',
	week_original: 'オリジナル',
	day_r18: 'R18 デイリー',
	week_r18: 'R18 ウィークリー',
	day_male_r18: 'R18 男子に人気',
	day_female_r18: 'R18 女子に人気',
	week_r18g: 'R18 G',
}
/* eslint-enable camelcase */

class Link extends Component {
	props: {
		onSelect: (mode: string) => void,
		mode: string
	};

	shouldComponentUpdate() {
		return false
	}

	render() {
		const onClick = () => this.props.onSelect(this.props.mode)
		return (
			<li>
				<a onClick={onClick}>
					{illustRanking[this.props.mode]}
				</a>
			</li>
		)
	}
}

type Props = {
	onSelect: (endpoint: Endpoint, query: $Shape<Query>, title: string) => void
};

export default class SelectColumnModal extends Component {
	props: Props;

	handleAddRanking = (mode: string) => {
		this.props.onSelect('illustRanking', {opts: {mode}}, `${illustRanking[mode]}ランキング`)
	}

	handleAddFavorite = (publicity: 'private' | 'public') => {
		const title = {private: '非公開ブックマーク', public: '公開ブックマーク'}[publicity]
		this.props.onSelect('userBookmarksIllust', {opts: {restrict: publicity}}, title)
	}

	handleAddIllustFollow = (publicity: 'private' | 'public') => {
		const title = {private: '新着 非公開', public: '新着 公開'}[publicity]
		this.props.onSelect('illustFollow', {opts: {restrict: publicity}}, title)
	}

	handleAddHistory = () => {
	}

	render() {
		const illustRankingLinks = Object.keys(illustRanking).map(v =>
			<Link
				mode={v}
				key={v}
				onSelect={this.handleAddRanking}
				/>
		)

		const onClickPublic = () => this.handleAddFavorite('public')
		const onClickPrivate = () => this.handleAddFavorite('private')
		const onClickillustFollowPublic = () => this.handleAddIllustFollow('public')
		const onClickillustFollowPrivate = () => this.handleAddIllustFollow('private')

		return (
			<div className={styles.wrap}>
				<header>
					<h4>追加するカラムを選択</h4>
				</header>
				<div>
					<div className={styles.kind}>ランキング</div>
					<ul className={styles.list}>
						{illustRankingLinks}
					</ul>
					<div className={styles.kind}>ブックマーク</div>
					<ul className={styles.list}>
						<li>
							<a onClick={onClickPublic}>
								公開ブックマーク
							</a>
						</li>
						<li>
							<a onClick={onClickPrivate}>
								非公開ブックマーク
							</a>
						</li>
					</ul>
					<div className={styles.kind}>新着</div>
					<ul className={styles.list}>
						<li>
							<a onClick={onClickillustFollowPublic}>
								公開
							</a>
						</li>
						<li>
							<a onClick={onClickillustFollowPrivate}>
								非公開
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
