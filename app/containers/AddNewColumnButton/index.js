// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import type { User } from 'types/user'
import { addUserIllustColumn } from '../ColumnUserIllust/actions'
import AddColumnButton, { type Props } from './Button'

type OP = {
  user: User,
}

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    dispatch(addUserIllustColumn(user.id))
  },
})

const connector: Connector<OP, Props> = connect(undefined, mapDispatchToProps)
export default connector(AddColumnButton)
