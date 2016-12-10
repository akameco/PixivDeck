// @flow
import {connect} from 'react-redux'
// import type {Connector} from 'react-redux'
import type {State} from '../../types'
import BoxHeader from './header/BoxHeader'
// import type {Props} from './header/BoxHeader'

const mapStateToProps = ({config: {isIllustComment}}: State) => ({
	isIllustComment,
})

const connector = connect(mapStateToProps)

export default connector(BoxHeader)
