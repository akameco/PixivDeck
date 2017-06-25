// @flow
import { connect } from 'react-redux'
import type { State } from 'types'
import { closeDrawer } from 'actions'
import App from './App'

const mapStateToProps = ({ manage, columns }: State) => ({
  manage,
  columns,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClose: () => {
    dispatch(closeDrawer())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
