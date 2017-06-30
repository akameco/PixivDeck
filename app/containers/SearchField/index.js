// @flow
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import type { Dispatch } from 'types'
import { closeSearchField } from '../HeaderContainer/actions'
import { addColumn } from '../ColumnSearch/actions'
import SearchField from './SearchFiled'
import type { Props } from './SearchFiled'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit(tag: string) {
    dispatch(addColumn(tag))
  },
  onClose() {
    dispatch(closeSearchField())
  },
})

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps)
export default connector(SearchField)
