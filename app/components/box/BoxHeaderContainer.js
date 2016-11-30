// @flow
import {connect} from 'react-redux'
import type {State} from '../../types'
import BoxHeader from './box-header'

const mapStateToProps = ({config}: State) => ({
	isIllustComment: config.isIllustComment,
})

export default connect(mapStateToProps)(BoxHeader)
