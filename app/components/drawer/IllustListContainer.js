// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import type {DrawerType} from '../../types/drawer'
import {nextDrawerPage} from '../../actions/drawer'
import IllustList from './IllustList'

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onIntersect(type: DrawerType) {
		dispatch(nextDrawerPage(type))
	},
})

export default connect(undefined, mapDispatchToProps)(IllustList)
