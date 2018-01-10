// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Drawer from 'components/Drawer'
import UserDrawerContainer from 'containers/UserDrawerContainer'
import { closeDrawer } from './actions'
import { makeSelectOpen } from './selectors'

type Props = {
  onRequestClose: () => void,
  open: boolean,
}

function DrawerManager(props: Props) {
  return (
    <Drawer {...props} width={600}>
      <UserDrawerContainer />
    </Drawer>
  )
}

const mapStateToProps = createStructuredSelector({
  open: makeSelectOpen(),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRequestClose: () => {
    dispatch(closeDrawer())
  },
})

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(DrawerManager)
