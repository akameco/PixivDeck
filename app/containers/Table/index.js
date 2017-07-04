// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Tabel, { type Props } from './Table'
import { makeSelectIds } from './selectors'
import type { TableIds } from './reducer'
import * as actions from './actions'

const mapStateToProps = createStructuredSelector({
  ids: makeSelectIds(),
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTabel(ids: TableIds) {
      dispatch(actions.setTable(ids))
    },
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Tabel)
