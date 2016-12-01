// @flow
import {connect} from 'react-redux'
import {closeDrawer} from '../../actions'
import Drawer from './Drawer'

export default connect(undefined, {closeDrawer})(Drawer)
