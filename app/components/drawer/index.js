// @flow
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {State} from '../../types'
import {closeDrawer} from '../../actions'
import Drawer from './Drawer'
import type {Props} from './Drawer'

const mapStateToProps = ({manage: {isDrawer}}: State) => ({
	isDrawer,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	closeDrawer() {
		dispatch(closeDrawer())
	},
})

const connector: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps)
export default connector(Drawer)
