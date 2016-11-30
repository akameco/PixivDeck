// @flow
import {connect} from 'react-redux'
import type {Dispatch, State} from '../../../types'
import {login} from '../../../actions'
import LoginModal from './LoginModal'

function mapStateToProps(state: State) {
	return {...state.auth}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onClick: (username, password) => {
			dispatch(login(username, password))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
