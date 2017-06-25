// @flow
import { connect, type Connector } from 'react-redux'
import type { State } from 'types'
import App, { type Props } from './App'

const mapStateToProps = ({ columns }: State) => ({
  columns,
})

const connector: Connector<{}, Props> = connect(mapStateToProps)

export default connector(App)
