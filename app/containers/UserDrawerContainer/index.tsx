import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import Loading from 'components/Loading'
import UserDrawer, { Props } from 'components/UserDrawer'
import {
  makeSelectUser,
  makeSelectProfile,
  makeGetMangas,
  makeGetIllusts,
} from './selectors'
import * as actions from './actions'

function UserDrawerContainer(props: Props) {
  const { user, profile } = props

  if (profile && user) {
    return <UserDrawer {...props} />
  }

  return <Loading />
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  illusts: makeGetIllusts(),
  mangas: makeGetMangas(),
  profile: makeSelectProfile(),
})

const connector = connect(
  mapStateToProps,
  (dispatch: Dispatch) => {
    return {
      onNextIllust() {
        dispatch(actions.nextIllustPage())
      },

      onNextManga() {
        dispatch(actions.nextMangaPage())
      },
    }
  }
)
export default connector(UserDrawerContainer)
