// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { User, Profile } from 'types/user'
import type { Illust } from 'types/illust'
import Loading from 'components/Loading'
import UserDrawer from 'components/UserDrawer'
import {
  makeSelectUser,
  makeSelectProfile,
  makeGetMangas,
  makeGetIllusts,
} from './selectors'

type Props = {
  user: ?User,
  profile: ?Profile,
  illusts: Array<Illust>,
  mangas: Array<Illust>,
  dispatch: Dispatch,
}

function UserDrawerContainer(props: Props) {
  const { user, profile, illusts, mangas } = props
  if (profile && user) {
    return (
      <UserDrawer
        illusts={illusts}
        mangas={mangas}
        profile={profile}
        user={user}
      />
    )
  }
  return <Loading />
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  illusts: makeGetIllusts(),
  mangas: makeGetMangas(),
  profile: makeSelectProfile(),
})

const connector: Connector<{}, Props> = connect(mapStateToProps)
export default connector(UserDrawerContainer)
