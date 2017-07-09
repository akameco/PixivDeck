// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import type { User } from 'types/user'
import { addColumn } from '../ColumnUserIllust/actions'
import AddColumnButton, { type Props } from './Button'

type OP = {
  user: User,
}

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    dispatch(addColumn(user.id))
  },
})

const connector: Connector<OP, Props> = connect(undefined, mapDispatchToProps)
export default connector(AddColumnButton)
