// @flow
import {connect} from 'react-redux'
import type {State} from '../../types'
import BoxHeader from './header/BoxHeader'

const mapStateToProps = ({config: {isIllustComment}}: State) => ({
	isIllustComment,
})

export default connect(mapStateToProps)(BoxHeader)
