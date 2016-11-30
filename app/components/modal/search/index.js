// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../../types'
import {addColumn} from '../../../actions'
import Modal from './search-modal'

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit: (tag: string) => {
			dispatch(addColumn('searchIllust', {word: tag}, tag, 1000 * 60 * 30))
		},
	}
}

export default connect(undefined, mapDispatchToProps)(Modal)
