// @flow
import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { FormattedMessage } from 'react-intl'
import type { User, Profile } from 'types/user'
import type { Illust } from 'types/illust'
import { key } from 'styleTheme'
import IllustList from '../IllustList'
import Header from './DrawerHeader'
import messages from './messages'

export type Props = {
  user: User,
  profile: Profile,
  illusts: Array<Illust>,
  mangas: Array<Illust>,
  onNextIllust: Function,
  onNextManga: Function,
}

const tabProps = {
  tabItemContainerStyle: {
    backgroundColor: key('base')(),
  },
  inkBarStyle: {
    backgroundColor: '#afafaf',
  },
}

const UserDrawer = ({
  user,
  profile,
  illusts,
  mangas,
  onNextIllust,
  onNextManga,
}: Props) => {
  const { totalIllusts, totalManga } = profile
  return (
    <div>
      <Header user={user} profile={profile} />
      <Tabs {...tabProps}>
        <Tab
          label={
            <FormattedMessage
              {...messages.tabIllust}
              values={{ count: totalIllusts }}
            />
          }
        >
          <IllustList
            illusts={illusts}
            id="illust-user-drawer"
            hasMore={illusts.length < totalIllusts}
            onNext={onNextIllust}
          />
        </Tab>
        <Tab
          label={
            <FormattedMessage
              {...messages.tabManga}
              values={{ count: totalManga }}
            />
          }
        >
          <IllustList
            illusts={mangas}
            id="illust-user-drawer"
            hasMore={mangas.length < totalManga}
            onNext={onNextManga}
          />
        </Tab>
      </Tabs>
    </div>
  )
}

export default UserDrawer
