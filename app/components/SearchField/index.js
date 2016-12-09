// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import {
	closeSearchField,
	addSearchIllustColumn,
} from '../../actions'
import SearchField from './SearchFiled'

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit(tag: string) {
			dispatch(addSearchIllustColumn(tag))
		},
		onClose() {
			dispatch(closeSearchField())
		},
	}
}

export default connect(undefined, mapDispatchToProps)(SearchField)
