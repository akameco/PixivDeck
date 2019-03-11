import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'types'
import { createStructuredSelector } from 'reselect'
import { User } from 'types/user'
import { Illust } from 'types/illust'
import UserPopover from 'components/UserPopover'
import { open } from './actions'
import { makeLimitedIllust } from './selectors'

interface OP {
  onClick: () => undefined
  user: User
}
type Props = {
  illusts: Illust[]
  open: Function
} & OP

class UserPopoverContainer extends React.PureComponent<Props> {
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
const connector = connect(
  mapStateToProps,
  (dispatch: Dispatch, { user }) => ({
    open() {
      dispatch(open(user.id))
    },
  })
)
export default connector(UserPopoverContainer)
