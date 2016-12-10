// @flow
import React, {Component} from 'react'
import * as ranking from '../../constants/ranking'
import styles from './AddColumnModal.css'

export type Props = {
	addBookmark: () => void,
	addBookmarkPrivate: () => void,
	addFollow: () => void,
	addFollowPrivate: () => void,
	addIllustRanking: (mode: $Keys<typeof ranking.ILLUST_RANKING>) => void,
	addIllustR18Ranking: (mode: $Keys<typeof ranking.ILLUST_R18_RANKING>) => void,
};

export default class SelectColumnModal extends Component {
	props: Props;

	render() {
		const IllustRankingLinks = Object.keys(ranking.ILLUST_RANKING).map(v => {
			const handleClick = () => this.props.addIllustRanking(v)
			return <LinkButton text={ranking.ILLUST_RANKING[v]} onClick={handleClick} key={v}/>
		})

		const IllustR18RankingLinks = Object.keys(ranking.ILLUST_R18_RANKING).map(v => {
			const handleClick = () => this.props.addIllustR18Ranking(v)
			return <LinkButton text={ranking.ILLUST_R18_RANKING[v]} onClick={handleClick} key={v}/>
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
						{IllustRankingLinks}
					</Card>
					<Card title="ブックマーク">
						<LinkButton text="公開" onClick={addBookmark}/>
						<LinkButton text="非公開" onClick={addBookmarkPrivate}/>
					</Card>
					<Card title="新着">
						<LinkButton text="公開" onClick={addFollow}/>
						<LinkButton text="非公開" onClick={addFollowPrivate}/>
					</Card>
					<Card title="R18 ランキング">
						{IllustR18RankingLinks}
					</Card>
				</div>
			</div>
		)
	}
}

const Card = ({title, children}: {title: string, children?: React$Element<any>}) => (
	<div className={styles.card}>
		<div className={styles.title}>{title}</div>
		<List>
			{children}
		</List>
	</div>
)

const LinkButton = ({text, onClick}: {text: string, onClick: () => void}) => (
	<div onClick={onClick} className={styles.linkButton}>
		<div className={styles.innerButton}>
			{text}
		</div>
	</div>
)

const List = ({children}: {children?: React$Element<any>}) => (
	<div className={styles.list}>
		{children}
	</div>
)
