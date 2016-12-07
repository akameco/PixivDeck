// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import {addColumn, closeSearchField} from '../../actions'
import SearchField from './SearchFiled'

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit(tag: string) {
			dispatch(addColumn('searchIllust', {word: tag}, tag, 1000 * 60 * 30))
		},
		onClose() {
			dispatch(closeSearchField())
		},
	}
}

export default connect(undefined, mapDispatchToProps)(SearchField)
