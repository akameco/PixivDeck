import * as React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { FormattedMessage } from 'react-intl'
import { User, Profile } from 'types/user'
import { Illust } from 'types/illust'
import { key } from 'styles/styleTheme'
import IllustList from '../IllustList'
import Header from './DrawerHeader'
import messages from './messages'

export interface Props {
  user: User
  profile: Profile
  illusts: Illust[]
  mangas: Illust[]
  onNextIllust: () => void
  onNextManga: () => void
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
        {totalIllusts > 0 && (
          <Tab
            label={
              <FormattedMessage
                {...messages.tabIllust}
                values={{
                  count: totalIllusts,
                }}
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
        )}
        {totalManga > 0 && (
          <Tab
            label={
              <FormattedMessage
                {...messages.tabManga}
                values={{
                  count: totalManga,
                }}
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
        )}
      </Tabs>
    </div>
  )
}

export default UserDrawer
