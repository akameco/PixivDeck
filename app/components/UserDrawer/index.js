// @flow
import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { FormattedMessage } from 'react-intl'
import type { User, Profile } from 'types/user'
import type { Illust } from 'types/illust'
import IllustListContainer from 'containers/IllustListContainer'
import Header from './DrawerHeader'
import messages from './messages'

type Props = {
  user: User,
  profile: Profile,
  illusts: Array<Illust>,
  mangas: Array<Illust>,
}

const tabProps = {
  tabItemContainerStyle: {
    backgroundColor: 'rgb(54, 75, 78)',
  },
  inkBarStyle: {
    backgroundColor: '#afafaf',
  },
}

const UserDrawer = ({ user, profile, illusts, mangas }: Props) => {
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
          <IllustListContainer
            illusts={illusts}
            type="illust"
            id="illust-user-drawer"
            hasMore={illusts.length < totalIllusts}
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
          <IllustListContainer
            illusts={mangas}
            type="manga"
            id="manga-user-drawer"
            hasMore={mangas.length < totalManga}
          />
        </Tab>
      </Tabs>
    </div>
  )
}

export default UserDrawer
