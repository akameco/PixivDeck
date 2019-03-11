import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import { closeSearchField } from '../HeaderContainer/actions'
import { addColumn } from '../ColumnSearch/actions'
import SearchField from './SearchFiled'
import { Props } from './SearchFiled'
import * as actions from './actions'
import { makeSelectKeyword } from './selectors'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFetch(word: string) {
    dispatch(actions.fetchRequest(word))
  },

  onSubmit(tag: string) {
    dispatch(addColumn(tag))
  },

  onClose() {
    dispatch(closeSearchField())
  },
})

const mapStateToProps = createStructuredSelector({
  keywords: makeSelectKeyword(),
})
const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(SearchField)
