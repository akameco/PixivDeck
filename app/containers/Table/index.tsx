import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import Tabel from './Table'
import { makeSelectIds } from './selectors'
import { TableIds } from './reducer'
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

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Tabel)
