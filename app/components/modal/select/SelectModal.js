// @flow
import React, {Component} from 'react'
import type {Query, Endpoint} from '../../../types/column'
import styles from './SelectModal.css'

/* eslint-disable camelcase */
const illustRanking = {
	day: 'デイリー',
	week: 'ウィークリー',
	month: 'マンスリー',
	day_male: '男子に人気',
	day_female: '女子に人気',
	week_rookie: 'ルーキー',
	week_original: 'オリジナル',
}

const illustR18Ranking = {
	day_r18: 'R18 デイリー',
	week_r18: 'R18 ウィークリー',
	day_male_r18: 'R18 男子に人気',
	day_female_r18: 'R18 女子に人気',
	week_r18g: 'R18 G',
}
/* eslint-enable camelcase */

type Props = {
	onSelect: (endpoint: Endpoint, query: $Shape<Query>, title: string) => void,
	addBookmark: () => void,
	addBookmarkPrivate: () => void,
	addFollow: () => void,
	addFollowPrivate: () => void,
};

export default class SelectColumnModal extends Component {
	props: Props;

	handleAddRanking = (mode: string) => {
		this.props.onSelect('illustRanking', {opts: {mode}}, `${illustRanking[mode]}ランキング`)
	}

	handleAddR18Ranking = (mode: string) => {
		this.props.onSelect('illustRanking', {opts: {mode}}, `${illustR18Ranking[mode]}ランキング`)
	}

	render() {
		const IllustRankingLinks = Object.keys(illustRanking).map(v => {
			const handleClick = () => this.handleAddRanking(v)
			return <LinkButton text={illustRanking[v]} onClick={handleClick} key={v}/>
		})

		const IllustR18RankingLinks = Object.keys(illustR18Ranking).map(v => {
			const handleClick = () => this.handleAddR18Ranking(v)
			return <LinkButton text={illustR18Ranking[v]} onClick={handleClick} key={v}/>
		})

		const {
			addBookmark,
			addBookmarkPrivate,
			addFollow,
			addFollowPrivate,
		} = this.props

		return (
			<div className={styles.wrap}>
				<div className={styles.header}>
					追加するカラムを選択
				</div>
				<div className={styles.content}>
					<Card title="ランキング">
						<List>
							{IllustRankingLinks}
						</List>
					</Card>
					<Card title="ブックマーク">
						<List>
							<LinkButton text="公開" onClick={addBookmark}/>
							<LinkButton text="非公開" onClick={addBookmarkPrivate}/>
						</List>
					</Card>
					<Card title="新着">
						<List>
							<LinkButton text="公開" onClick={addFollow}/>
							<LinkButton text="非公開" onClick={addFollowPrivate}/>
						</List>
					</Card>
					<Card title="R18 ランキング">
						<List>
							{IllustR18RankingLinks}
						</List>
					</Card>
				</div>
			</div>
		)
	}
}

const Card = ({title, children}: {title: string, children?: ?any}) => (
	<div className={styles.Card}>
		<div className={styles.title}>{title}</div>
		{children}
	</div>
)

const LinkButton = ({text, onClick}: {text: string, onClick: () => void}) => (
	<div onClick={onClick} className={styles.LinkButton}>
		<div className={styles.innerButton}>
			{text}
		</div>
	</div>
)

const List = ({children}: {children?: any}) => (
	<div className={styles.List}>
		{children}
	</div>
)
