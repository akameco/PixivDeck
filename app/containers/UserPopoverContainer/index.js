// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import { createStructuredSelector } from 'reselect'
import type { User } from 'types/user'
import type { Illust } from 'types/illust'
import UserPopover from 'components/UserPopover'
import { open } from './actions'
import { makeLimitedIllust } from './selectors'

type OP = {
  onClick: () => void,
  user: User,
}

type Props = {
  illusts: Array<Illust>,
  open: Function,
} & OP

class UserPopoverContainer extends React.PureComponent {
  props: Props

  componentWillMount() {
    this.props.open()
  }

  render() {
    const { onClick, user, illusts } = this.props
    return <UserPopover onClick={onClick} user={user} illusts={illusts} />
  }
}

const mapStateToProps = createStructuredSelector({
  illusts: makeLimitedIllust(),
})

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  (dispatch: Dispatch, { user }) => ({
    open() {
      dispatch(open(user.id))
    },
  })
)
export default connector(UserPopoverContainer)
