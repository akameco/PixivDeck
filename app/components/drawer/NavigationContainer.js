// @flow
import {connect} from 'react-redux'
import {
	follow,
	unFollow,
} from '../../actions'
import Navigation from './Navigation'

export default connect(undefined, {follow, unFollow})(Navigation)
