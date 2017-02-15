// @flow
import React, {Component} from 'react'
import styled from 'styled-components'
import * as ranking from 'constants/ranking'
import Card from './Card'
import LinkButton from './LinkButton'

const Wrap = styled.div`
	height: calc(100% - 1rem);
	padding: 1rem;
`

const Content = styled.div`
	display: flex;
	flex-direction: row;
	background: #f5f5f5;
	padding-bottom: 10px;
	overflow-y: auto;
`

const Header = styled.div`
	font-weight: 500;
	margin-left: 10px;
	margin-bottom: 10px;
`

export type Props = {
	addBookmark: () => void,
	addBookmarkPrivate: () => void,
	addFollow: () => void,
	addFollowPrivate: () => void,
	addIllustRanking: (mode: $Keys<typeof ranking.ILLUST_RANKING>) => void,
	addIllustR18Ranking: (mode: $Keys<typeof ranking.ILLUST_R18_RANKING>) => void,
}

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
			<Wrap>
				<Header>追加するカラムを選択</Header>
				<Content>
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
				</Content>
			</Wrap>
		)
	}
}
