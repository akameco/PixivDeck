// @flow
import {connect} from 'react-redux'
import type {Dispatch, State} from '../../../types'
import {login} from '../../../actions'
import LoginModal from './LoginModal'

const mapStateToProps = ({auth}: State) => ({...auth})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onClick(username, password) {
		dispatch(login(username, password))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
