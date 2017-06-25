// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Dispatch, State } from 'types'
import type { User, Profile } from 'types/user'
import type { Illust } from 'types/illust'
import { fetchUserDetail } from 'actions'
import { fetchDrawerIllust } from 'actions/drawer'
import { getCurrentUser, getDrawerIllusts, getDrawerMangas } from 'reducers'
import Loading from 'components/Loading'
import UserDrawer from 'components/UserDrawer'

type Props = {
  user: User,
  profile: Profile,
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
    const { dispatch, user: { id } } = this.props

    await Promise.all([
      dispatch(fetchUserDetail(id)),
      dispatch(fetchDrawerIllust(id, 'illust')),
      dispatch(fetchDrawerIllust(id, 'manga')),
    ])
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

export default connect(mapStateToProps)(UserDrawerContainer)
