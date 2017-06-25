// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import type { User } from 'types/user'
// import { addUserIllusts } from 'actions'
import { addUserIllust } from './actions'
import AddColumnButton, { type Props } from './Button'

type OP = {
  user: User,
}

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    dispatch(addUserIllust(user))
  },
})

const connector: Connector<OP, Props> = connect(undefined, mapDispatchToProps)
export default connector(AddColumnButton)
