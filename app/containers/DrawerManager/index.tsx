import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Drawer from 'components/Drawer'
import UserDrawerContainer from 'containers/UserDrawerContainer'
import { closeDrawer } from './actions'
import { makeSelectOpen } from './selectors'

interface Props {
  onRequestClose: () => undefined
  open: boolean
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

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(DrawerManager)
