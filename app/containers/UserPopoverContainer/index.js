// @flow
import React from 'react'
import type { Connector } from 'react-redux'
import { connect } from 'react-redux'
import type { Dispatch } from 'types'
import { createSelector } from 'reselect'
import type { User } from 'types/user'
import type { Illust } from 'types/illust'
import UserPopover from 'components/UserPopover'
import { openUserPopover } from './actions'
import { makeSelectIllusts } from './selectors'

type OwnProps = {
  onClick: () => void,
  user: User,
}

type Props = {
  user: User,
  onClick: () => void,
  illusts: Array<Illust>,
  dispatch: Dispatch,
}

class UserPopoverContainer extends React.PureComponent {
  props: Props

  componentWillMount() {
    const { user: { id }, dispatch } = this.props
    dispatch(openUserPopover(id))
  }

  render() {
    const { dispatch, ...rest } = this.props
    return <UserPopover {...rest} />
  }
}

const mapStateToProps = createSelector(makeSelectIllusts(), illusts => ({
  illusts,
}))

const connector: Connector<OwnProps, Props> = connect(mapStateToProps)
export default connector(UserPopoverContainer)
