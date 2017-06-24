// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'
import * as ranking from 'constants/ranking'
import Card from './Card'
import LinkButton from './LinkButton'
import messages from './messages'
import { Content, Header, Wrap } from './styles'

export type Props = {
  addBookmark: () => void,
  addBookmarkPrivate: () => void,
  addFollow: () => void,
  addFollowPrivate: () => void,
  addIllustRanking: (mode: $Keys<typeof ranking.ILLUST_RANKING>) => void,
  addIllustR18Ranking: (mode: $Keys<typeof ranking.ILLUST_R18_RANKING>) => void,
}

export default function SelectColumnModal(props: Props) {
  const IllustRankingLinks = Object.keys(ranking.ILLUST_RANKING).map(v => {
    const handleClick = () => props.addIllustRanking(v)
    return (
      <LinkButton
        text={ranking.ILLUST_RANKING[v]}
        onClick={handleClick}
        key={v}
      />
    )
  })

  const IllustR18RankingLinks = Object.keys(
    ranking.ILLUST_R18_RANKING
  ).map(v => {
    const handleClick = () => props.addIllustR18Ranking(v)
    return (
      <LinkButton
        text={ranking.ILLUST_R18_RANKING[v]}
        onClick={handleClick}
        key={v}
      />
    )
  })

  const { addBookmark, addBookmarkPrivate, addFollow, addFollowPrivate } = props

  return (
    <Wrap>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content>
        <Card title={<FormattedMessage {...messages.ranking} />}>
          {IllustRankingLinks}
        </Card>
        <Card title={<FormattedMessage {...messages.bookmark} />}>
          <LinkButton
            text={<FormattedMessage {...messages.public} />}
            onClick={addBookmark}
          />
          <LinkButton
            text={<FormattedMessage {...messages.private} />}
            onClick={addBookmarkPrivate}
          />
        </Card>
        <Card title={<FormattedMessage {...messages.new} />}>
          <LinkButton
            text={<FormattedMessage {...messages.public} />}
            onClick={addFollow}
          />
          <LinkButton
            text={<FormattedMessage {...messages.private} />}
            onClick={addFollowPrivate}
          />
        </Card>
        <Card title={<FormattedMessage {...messages.r18ranking} />}>
          {IllustR18RankingLinks}
        </Card>
      </Content>
    </Wrap>
  )
}
