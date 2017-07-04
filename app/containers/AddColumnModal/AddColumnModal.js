// @flow
import React from 'react'
import { injectIntl, type IntlShape } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import type { Mode } from 'containers/ColumnRanking/reducer'
import rankingMessages from 'containers/ColumnRanking/messages'
import type { R18Mode } from 'containers/ColumnRankingR18/reducer'
import rankingR18Messages from 'containers/ColumnRankingR18/messages'
import Card from './Card'
import LinkButton from './LinkButton'
import messages from './messages'
import { Content, Header, Wrap } from './styles'

export type Props = {
  addBookmark: () => void,
  addBookmarkPrivate: () => void,
  addFollow: () => void,
  addFollowPrivate: () => void,
  addHistory: () => void,
  addIllustRanking: (mode: Mode) => void,
  addIllustR18Ranking: (mode: R18Mode) => void,
}

const rankingMode = [
  'day',
  'week',
  'month',
  'day_male',
  'day_female',
  'week_original',
  'week_rookie',
]

const rankingR18Mode = [
  'day_r18',
  'week_r18',
  'day_male_r18',
  'day_female_r18',
  'week_r18g',
]

function SelectColumnModal(props: Props & { intl: IntlShape }) {
  const IllustRankingLinks = rankingMode.map(v => {
    const handleClick = () => props.addIllustRanking(v)
    return (
      <LinkButton
        text={props.intl.formatMessage(rankingMessages[v])}
        onClick={handleClick}
        key={v}
      />
    )
  })

  const IllustR18RankingLinks = rankingR18Mode.map(v => {
    const handleClick = () => props.addIllustR18Ranking(v)
    return (
      <LinkButton
        text={props.intl.formatMessage(rankingR18Messages[v])}
        onClick={handleClick}
        key={v}
      />
    )
  })

  const {
    addBookmark,
    addBookmarkPrivate,
    addFollow,
    addFollowPrivate,
    addHistory,
  } = props

  return (
    <Wrap>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content>
        <Card title={<FormattedMessage {...messages.history} />}>
          <LinkButton
            text={<FormattedMessage {...messages.history} />}
            onClick={addHistory}
          />
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
        <Card title={<FormattedMessage {...messages.ranking} />}>
          {IllustRankingLinks}
        </Card>
        <Card title={<FormattedMessage {...messages.r18ranking} />}>
          {IllustR18RankingLinks}
        </Card>
      </Content>
    </Wrap>
  )
}

export default injectIntl(SelectColumnModal)
