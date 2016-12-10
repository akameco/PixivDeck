// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import {
	closeSearchField,
	addSearchIllustColumn,
} from '../../actions'
import SearchField from './SearchFiled'

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onSubmit(tag: string) {
		dispatch(addSearchIllustColumn(tag))
	},
	onClose() {
		dispatch(closeSearchField())
	},
})

export default connect(undefined, mapDispatchToProps)(SearchField)
