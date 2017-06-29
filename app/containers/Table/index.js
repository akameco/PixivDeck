// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Tabel, { type Props } from './Table'
import { makeSelectIds } from './selectors'

const mapStateToProps = createStructuredSelector({
  ids: makeSelectIds(),
})

const connector: Connector<{}, Props> = connect(mapStateToProps)
export default connector(Tabel)
