import { connect, Connector } from 'react-redux'
import { Dispatch } from 'types'
import { User } from 'types/user'
import { addColumn } from '../ColumnUserIllust/actions'
import AddColumnButton, { Props } from './Button'

interface OP {
  user: User
}

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    dispatch(addColumn(user.id))
  },
})

const connector: Connector<OP, Props> = connect(
  undefined,
  mapDispatchToProps
)
export default connector(AddColumnButton)
