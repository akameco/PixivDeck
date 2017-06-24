// @flow
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import type { Dispatch } from 'types'
import { addColumnSearchIllust, closeSearchField } from './actions'
import SearchField from './SearchFiled'
import type { Props } from './SearchFiled'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit(tag: string) {
    dispatch(addColumnSearchIllust(tag))
  },
  onClose() {
    dispatch(closeSearchField())
  },
})

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps)
export default connector(SearchField)
