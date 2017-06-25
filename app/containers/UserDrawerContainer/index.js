// @flow
import React, { Component } from 'react'
import { connect, type Connector } from 'react-redux'
import type { Dispatch, State } from 'types'
import type { User, Profile } from 'types/user'
import type { Illust } from 'types/illust'
import { fetchUserDetail } from 'actions'
import { fetchDrawerIllust } from 'actions/drawer'
import { getCurrentUser, getDrawerIllusts, getDrawerMangas } from 'reducers'
import Loading from 'components/Loading'
import UserDrawer from 'components/UserDrawer'

type Props = {
  user: ?User,
  profile: ?Profile,
  illusts: Array<Illust>,
  mangas: Array<Illust>,
  dispatch: Dispatch,
}

class UserDrawerContainer extends Component {
  props: Props

  componentDidMount() {
    this.init()
  }

  async init() {
    const { dispatch, user } = this.props
    if (user && user.id) {
      await Promise.all([
        dispatch(fetchUserDetail(user.id)),
        dispatch(fetchDrawerIllust(user.id, 'illust')),
        dispatch(fetchDrawerIllust(user.id, 'manga')),
      ])
    }
  }

  render() {
    const { user, profile, illusts, mangas } = this.props
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
}

const mapStateToProps = (state: State) => ({
  user: state.drawer.user || getCurrentUser(state),
  illusts: getDrawerIllusts(state),
  mangas: getDrawerMangas(state),
  profile: state.drawer.profile,
})

const connector: Connector<{}, Props> = connect(mapStateToProps)
export default connector(UserDrawerContainer)
