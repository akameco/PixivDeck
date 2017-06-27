// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Tabel, { type Props } from './Table'
import { makeSelectNames } from './selectors'

const mapStateToProps = createStructuredSelector({
  names: makeSelectNames(),
})

const connector: Connector<{}, Props> = connect(mapStateToProps)
export default connector(Tabel)
